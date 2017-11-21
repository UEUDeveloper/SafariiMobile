import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ModalPanduanPage } from '../modal-panduan/modal-panduan';

/**
 * Generated class for the PanduanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-panduan',
  templateUrl: 'panduan.html',
})
export class PanduanPage {

	panduanData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage:Storage, public modalCtrl: ModalController) {

    this.storage.get('panduan').then((val)=>{
        if(val == null)
        	this.load();
        else
          {
          	this.panduanData = val;
          	console.log(this.panduanData);
          }
      });
  }
  load()
  {
  	this.http.get('http://safarii.ldkikmi.org/index.php/panduan/json_panduan').map(res => res.json()).subscribe(data => {
        this.panduanData = data.result;
        this.storage.set('panduan', data.result);
    });
  }

  openModal(item){
  	let modal = this.modalCtrl.create(ModalPanduanPage, item);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanduanPage');
  }

}
