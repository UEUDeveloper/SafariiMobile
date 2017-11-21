import { Component } from '@angular/core';
import { Platform, ModalController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { Storage } from '@ionic/storage';
import { SplashPage } from '../pages/splash/splash';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';

// import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
   n = 0;
   lat:any;
   lng:any;
   keteranganJamak:any;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public storage:Storage, 
    public modalCtrl: ModalController, 
    public alertCtrl: AlertController, 
    private localNotifications: LocalNotifications,
    public http:Http,
    public geo:Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // modal splash
      let splash = modalCtrl.create(SplashPage);
            splash.present();

      this.storage.get('id_users').then((val)=>{
        if(val == null)
          this.rootPage = LoginPage;
        else
          this.rootPage = MenuPage;
      });

      var option = {
        timeout : 5000
      };

      this.geo.getCurrentPosition(option).then(resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      console.log(this.lat);
      console.log(this.lng);
      }).catch(()=> {
        console.log("Error to get location");
      });

      this.cekNotifikasiJamak();
      this.responAlert()
      statusBar.styleDefault();
      // splashScreen.hide(); removed
    });
  }

  cekNotifikasiJamak()
  {
    setInterval(() => {
      this.n++;

      this.storage.get('jamak').then((val)=>
        {
          if(val == null || val == false)
          {
            console.log('belum bisa.. '+this.n);
          }
          else
          {
            let date = new Date();
            let nowTime = date.getHours() + ':' + date.getMinutes();
            this.storage.get('pilihanJamak').then((val)=>{
              this.http.get("http://safarii.ldkikmi.org/index.php/perjalanan/cekJamak/"+ val+"/"+nowTime+"/"+this.lat+"/"+this.lng).map(res => res.json()).subscribe(data => {
                console.log(data.status);
                if(data.status != 0)
                {
                  this.storage.get('keterangan').then((val)=>{
                     this.keteranganJamak = val;
                   });
                  this.notifMe();

                }
              });
            });
          }
        });

    }, 10000);
  }
    showAlert(msgAlert:string) {
    let alert = this.alertCtrl.create({
      title: 'Information',
      subTitle: msgAlert,
      buttons: ['OK']
    });
    alert.present();
  }
  responAlert()
  {
    this.localNotifications.on('click', (notification, state) => {
      let json = JSON.parse(notification.data);
 
      let alert = this.alertCtrl.create({
        title: notification.title,
        subTitle: json.mydata
      });
      alert.present();
    });

    this.storage.remove('keterangan').then((val)=>{
      console.log("keterangan clear");
    });

    this.storage.remove('jamak').then((val)=>{
      console.log("keterangan clear");
    });
  }

  notifMe()
  {
    this.localNotifications.schedule({
    id: 1,
    title: 'Jamak Sholat',
    text: this.keteranganJamak,
    data: { mydata: this.keteranganJamak }
    });
  }
}

// android map api : AIzaSyApHmrUyrqIsGmyJuRFaVR8dZXcH4LzM0k
// js map api : AIzaSyDnj5UUBEeT0u7DHXRWSL4Br44QvFqJoOg