import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Platform,AlertController, LoadingController, ModalController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

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

  start:any;
  end:any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers : true});
  // distanceMatrix = new google.maps.DistanceMatrixService;

  lat = 0;
  long=0;
  icons:any;
  gmarkers = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private geo:Geolocation, 
    private platform:Platform, 
    public alertCtrl: AlertController, 
    public storage: Storage,
    public http:Http, 
    public loadingCtrl:LoadingController,
    public modalCtrl:ModalController){

    this.platform.ready().then(() => {
      this.start = '';
      this.end = '';

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

       this.icons = {
        start: new google.maps.MarkerImage(

        'http://maps.google.com/mapfiles/ms/micons/green.png',
        // (width,height)
        new google.maps.Size(44, 32),
        // The origin point (x,y)
        new google.maps.Point(0, 0),
        // The anchor point (x,y)
        new google.maps.Point(22, 32)),
        end: new google.maps.MarkerImage(
        // URL
        'http://maps.google.com/mapfiles/ms/micons/red.png',
        // (width,height)
        new google.maps.Size(44, 32),
        // The origin point (x,y)
        new google.maps.Point(0, 0),
        // The anchor point (x,y)
        new google.maps.Point(22, 32))
      };

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
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

   var myloc = new google.maps.Marker({
      clickable: false,
      icon: new google.maps.MarkerImage('assets/img/mobileimgs2.png',
            new google.maps.Size(22,22),
            new google.maps.Point(0,18),
            new google.maps.Point(11,11)),
      shadow: null,
      zIndex: 999,
      map: this.map
    });
    var me = new google.maps.LatLng(this.lat, this.long);
    myloc.setPosition(me);


    this.directionsDisplay.setMap(this.map);

  }

  calculateAndDisplayRoute() {
    this.clearOverlays();

    let location = {lat: this.lat, lng :this.long};
    let mulai;
    if(this.start=='Sekarang')
      mulai = location;
    else
      mulai = this.start;

    if(this.start != '' && this.end !='')
    {
      this.directionsService.route({
        origin: mulai,
        destination: this.end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
          var leg = response.routes[0].legs[0];
          this.makeMarker(leg.start_location,this.icons.start, "Start");
          this.makeMarker(leg.end_location, this.icons.end, "End");

          this.computeTotalDistance(response);
        } else {
          this.showAlert('Directions request failed due to ' + status);
        }
      });
    }
  }

  setCurrent()
  {
    this.start = 'Sekarang';
  }

  clearOverlays() {
    for (var i = 0; i < this.gmarkers.length; i++ ) {
      this.gmarkers[i].setMap(null);
    }
    this.gmarkers.length = 0;
  }

  makeMarker( position, icon, title) {
   let marker = new google.maps.Marker({
    position: position,
    map: this.map,
    icon: icon,
    title : title
   });
   this.gmarkers.push(marker);
  }

  computeTotalDistance(result) {
    var total = 0;
    var myroute = result.routes[0];
    for (var i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i].distance.value;
    }
    total = total / 1000;
    this.generateDirection(myroute, total);
  }

  generateDirection(route, distance)
  {

    let loader = this.loadingCtrl.create({
        content: "Processing..."
    });
    loader.present();

    let startLat  = route.legs[0].start_location.lat();
    let startLng  = route.legs[0].start_location.lng();
    let EndLat  = route.legs[0].end_location.lat();
    let EndLng  = route.legs[0].end_location.lng();
    let date = new Date();
    let nowTime = date.getHours() + ':' + date.getMinutes();
    let nowDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();


    let postParams = {
      distance : btoa(distance.toString()),
      startLat : btoa(startLat),
      startLng : btoa(startLng),
      endLat   : btoa(EndLat),
      endLng   : btoa(EndLng),
      nowDate  : btoa(nowDate),
      nowTime  : btoa(nowTime),
      placeStart : btoa(this.start)
    };
    console.log('date :'+nowTime);
    console.log('time :'+nowDate);
    //this.showAlert('total : '+total+ ' km');
    
    this.http.post("http://safarii.ldkikmi.org/index.php/perjalanan/generate/", JSON.stringify(postParams)).map(res => res.json()).subscribe(data => {
      console.log(data);
      if(data.status == 0)
      {
        this.showAlert('Jarak tidak memenuhi syarat jamak, kurang dari 89 km');
        loader.dismissAll();
      }
      else
      {
        let directionParamModal = {
          distance : distance,
          start  : this.start,
          end    : this.end,
          jamak  : data.hasil
        }
        this.showModalDirection(directionParamModal);

        loader.dismissAll();
      }
    });


  }

  showAlert(msgAlert:string) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: msgAlert,
      buttons: ['OK']
    });
    alert.present();
  }

  showModalDirection(data)
  {
    let directionModal = this.modalCtrl.create('ModalDirectionPage', data);
    directionModal.present();
  }

}
