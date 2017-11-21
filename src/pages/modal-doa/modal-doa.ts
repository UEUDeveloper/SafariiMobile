import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
/**
 * Generated class for the ModalDoaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-doa',
  templateUrl: 'modal-doa.html',
})
export class ModalDoaPage {
	doaItem:any;
  constructor(public navCtrl: NavController, public storage:Storage, public navParams: NavParams, public plaform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http) {
  	this.doaItem = {
  		judul_doa : navParams.get('judul_doa'),
  		arab_doa  :navParams.get('arab_doa'),
  		arti_doa  :navParams.get('arti_doa'),
  		latin_doa  :navParams.get('latin_doa')
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDoaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
