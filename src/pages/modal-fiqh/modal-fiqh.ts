import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ModalFiqhPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-fiqh',
  templateUrl: 'modal-fiqh.html',
})
export class ModalFiqhPage {
	fiqhItem:any;
  constructor(public navCtrl: NavController, public storage:Storage, public navParams: NavParams, public plaform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http) {
  	this.fiqhItem = {
  		judul_panduan : navParams.get('judul_panduan'),
  		isi_panduan  :navParams.get('isi_panduan')
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFiqhPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
