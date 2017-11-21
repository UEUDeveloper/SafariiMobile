import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PanduanPage } from '../panduan/panduan';

/**
 * Generated class for the ModalDirectionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal-direction',
  templateUrl: 'modal-direction.html',
})
export class ModalDirectionPage {
  startDirection : string;
  endDirection : string;
  distance:number;
  jamak:any;

  zhuhur = false;
  ashar = false;
  maghrib = false;
  isya = false;
  kosong = false;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public viewCtrl: ViewController,
    public storage: Storage,
    public alertCtrl: AlertController ) 
  {
  	this.startDirection = navParams.get('start');
  	this.endDirection = navParams.get('end');
  	this.distance = navParams.get('distance');
    console.log('hasil'+ navParams.get('jamak'));


  	this.initJamak();
  }

  initJamak()
  {
  	let hasil = this.navParams.get('jamak');
  	if(hasil == 1)
  	{
  		this.zhuhur = true;
  		this.ashar = true;
  	}
  	else if(hasil == 2)
  		this.ashar = true;
  	else if(hasil == 3)
  	{
  		this.maghrib = true;
  		this.isya = true;
  	}
  	else if (hasil == 4) 
  		this.isya = true;
    else if(hasil == 0)
      this.kosong = true;
  }	

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDirectionPage');
  }

  dismiss()
  {
  	this.viewCtrl.dismiss();
  }

  doTakdimZhuhur()
  {
     this.storage.set('jamak', true);
     this.storage.set('pilihanJamak', 1);
     this.storage.set('keterangan', 'Jamak Takdim Zhuhur-Ashar');
     this.showAlert('Jamak takdim diwaktu zhuhur diaktifkan');
    this.viewCtrl.dismiss();
  }


  doTakdimMaghrib()
  {
     this.storage.set('jamak', true);
     this.storage.set('pilihanJamak', 3);
     this.storage.set('keterangan', 'Jamak Takdim Maghrib-Isya');
     this.showAlert('Jamak takdim diwaktu maghrib diaktifkan');
    this.viewCtrl.dismiss();
  }

  doTakhirAshar()
  {
     this.storage.set('jamak', true);
     this.storage.set('pilihanJamak', 2);
     this.storage.set('keterangan', 'Jamak Takhir Ashar-Zhuhur');
     this.showAlert('Jamak takhir diwaktu Ashar diaktifkan');
    this.viewCtrl.dismiss();
  }

  doTakhirIsya()
  {
     this.storage.set('jamak', true);
     this.storage.set('pilihanJamak', 4);
     this.storage.set('keterangan', 'Jamak Takhir Isya-Maghrib');
     this.showAlert('Jamak takhir diwaktu Isya diaktifkan');
    this.viewCtrl.dismiss();
  }

  showAlert(msgAlert:string) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: msgAlert,
      buttons: ['OK']
    });
    alert.present();
  }

  openPanduan()
  {
    this.navCtrl.push(PanduanPage);
  }

}
