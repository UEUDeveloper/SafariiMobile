import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule} from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
// import { OneSignal } from '@ionic-native/onesignal';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import { PerjalananPage } from '../pages/perjalanan/perjalanan';
import { PanduanPage } from '../pages/panduan/panduan';
import { ModalPanduanPage } from '../pages/modal-panduan/modal-panduan';
import { ModalDoaPage } from '../pages/modal-doa/modal-doa';
import { ModalFiqhPage } from '../pages/modal-fiqh/modal-fiqh';
import { DoaPage } from '../pages/doa/doa';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { fiqhPage } from '../pages/fiqh/fiqh';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { SplashPage } from '../pages/splash/splash';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    PerjalananPage,
    PanduanPage,
    DoaPage,
    fiqhPage,
    ProfilePage,
    AboutPage,
    HelpPage,
    RegisterPage,
    SplashPage,
    ModalPanduanPage,
    ModalDoaPage,
    ModalFiqhPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MenuPage,
    PerjalananPage,
    PanduanPage,
    DoaPage,
    fiqhPage,
    AboutPage,
    ProfilePage,
    HelpPage,
    RegisterPage,
    SplashPage,
    ModalPanduanPage,
    ModalDoaPage,
    ModalFiqhPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    LocalNotifications
  ]
})
export class AppModule {}
