import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ModalDoaPage } from '../modal-doa/modal-doa';

/**
 * Generated class for the DoaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-doa',
  templateUrl: 'doa.html',
})
export class DoaPage {

	doaData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage:Storage, public modalCtrl: ModalController) {
  	this.storage.get('doa').then((val)=>{
        if(val == null)
        	this.load();
        else
          {
          	this.doaData = val;
          	console.log(this.doaData);
          }
      });
    }
    load()
	  {
	  	this.http.get('http://safarii.ldkikmi.org/index.php/panduan/json_doa').map(res => res.json()).subscribe(data => {
	        this.doaData = data.result;
	        this.storage.set('doa', data.result);
	    });
	  }
	  openModal(item){
  	let modal = this.modalCtrl.create(ModalDoaPage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoaPage');
  }

}
