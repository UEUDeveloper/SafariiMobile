import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform,AlertController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PerjalananPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var google;

@Component({
  selector: 'page-perjalanan',
  templateUrl: 'perjalanan.html',
})
export class PerjalananPage {
// maps attribute
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	start = 'Jakarta';
	end = 'Jakarta';
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer;
	// distanceMatrix = new google.maps.DistanceMatrixService;

	lat = 0;
	long=0;
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private geo:Geolocation, 
  	private platform:Platform, 
  	public alertCtrl: AlertController, public storage: Storage){

  	this.platform.ready().then(() => {

  		var option = {
  			timeout : 5000
  		};

  		this.geo.getCurrentPosition(option).then(resp => {
  			this.lat = resp.coords.latitude;
  			this.long = resp.coords.longitude;
  			console.log(this.lat);
  			console.log(this.long);
			  this.initMap(this.lat,this.long);
  		}).catch(()=> {
  			console.log("Error to get location");
  		});

  		storage.set('name', 'Max');

		// Or to get a key/value pair
		storage.get('name').then((val) => {
			console.log('Your age is', val);
		});
 

  	});
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerjalananPage');
  }

 //  ngAfterViewInit() {
	//     var input = document.getElementsByClassName('textSearch');
	//     var options = {componentRestrictions: {country: 'id'}};
	//     new google.maps.places.Autocomplete(input, options);
	// }

  initMap(geoLat:Number, geoLong:Number) {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 9,
      center: {lat: geoLat, lng: geoLong},
      mapTypeControl: false,
      scaleControl: false,
      scrollwheel: false,
      navigationControl: false,
      streetViewControl: false
    });

    this.directionsDisplay.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        this.computeTotalDistance(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  //   this.distanceMatrix.getDistanceMatrix(
  //   	{
		//       origins: [this.start],
		//       destinations: [this.end],
		//     travelMode: 'DRIVING',
		//     avoidHighways: false,
		//     avoidTolls: false,
		// }, (response, status) => {
	 //      if (status === 'OK') {
	 //      	this.showAlert(response);
	 //      } else {
	 //        window.alert('Directions request failed due to ' + status);
	 //      }
		// }
  //   );
  }

	computeTotalDistance(result) {
	  var total = 0;
	  var myroute = result.routes[0];
	  for (var i = 0; i < myroute.legs.length; i++) {
	    total += myroute.legs[i].distance.value;
	  }
	  total = total / 1000;
	  this.showAlert('total : '+total+ ' km');
	}
  showAlert(msgAlert:string) {
    let alert = this.alertCtrl.create({
      title: 'Direction',
      subTitle: msgAlert,
      buttons: ['OK']
    });
    alert.present();
  }



}
