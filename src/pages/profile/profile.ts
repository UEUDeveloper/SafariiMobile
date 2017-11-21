import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
	nama:any;
	email:any;
	username:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
  	this.storage.get('nama_users').then((val)=>{
  		this.nama = val;
  	});
  	this.storage.get('email_users').then((val)=>{
  		this.email = atob(val);
  	});
  	this.storage.get('username').then((val)=>{
  		this.username = atob(val);
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
