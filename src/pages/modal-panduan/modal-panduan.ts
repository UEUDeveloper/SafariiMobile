import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ModalPanduanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-panduan',
  templateUrl: 'modal-panduan.html',
})
export class ModalPanduanPage {

	panduanItem:any;
  constructor(public navCtrl: NavController, public storage:Storage, public navParams: NavParams, public plaform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http) {
  	this.panduanItem = {
  		judul_safar : navParams.get('judul_safar'),
  		arab_safar  :navParams.get('arab_safar'),
  		arti_safar  :navParams.get('arti_safar'),
  		latin_safar  :navParams.get('latin_safar')
  	}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPanduanPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
