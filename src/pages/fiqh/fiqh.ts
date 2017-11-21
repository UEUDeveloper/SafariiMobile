import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ModalFiqhPage } from '../modal-fiqh/modal-fiqh';

/**
 * Generated class for the DoaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-fiqh',
  templateUrl: 'fiqh.html',
})
export class fiqhPage {

	fiqhData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage:Storage, public modalCtrl: ModalController) {
  	this.storage.get('fiqh').then((val)=>{
        if(val == null)
        	this.load();
        else
          {
          	this.fiqhData = val;
          	console.log(this.fiqhData);
          }
      });
    }
    load()
	  {
	  	this.http.get('http://safarii.ldkikmi.org/index.php/panduan/json_fiqih').map(res => res.json()).subscribe(data => {
	        this.fiqhData = data.result;
	        this.storage.set('fiqh', data.result);
	    });
	  }
	  openModal(item){
  	let modal = this.modalCtrl.create(ModalFiqhPage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiqhPage');
  }

}
