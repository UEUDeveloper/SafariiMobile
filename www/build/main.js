webpackJsonp([1],{

/***/ 25:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 25;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/splash/splash.module": [
		64,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 28;

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SplashPage = (function () {
    function SplashPage(navCtrl, navParams, viewCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.splashScreen = splashScreen;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    return SplashPage;
}());
SplashPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-splash',template:/*ion-inline-start:"D:\project\Safarii\src\pages\splash\splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\splash\splash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/perjalanan/perjalanan.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerjalananPage = (function () {
    function PerjalananPage(navCtrl, navParams, geo, platform, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geo = geo;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.start = 'Jakarta';
        this.end = 'Jakarta';
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        // distanceMatrix = new google.maps.DistanceMatrixService;
        this.lat = 0;
        this.long = 0;
        this.platform.ready().then(function () {
            var option = {
                timeout: 5000
            };
            _this.geo.getCurrentPosition(option).then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this.long = resp.coords.longitude;
                console.log(_this.lat);
                console.log(_this.long);
                _this.initMap(_this.lat, _this.long);
            }).catch(function () {
                console.log("Error to get location");
            });
            storage.set('name', 'Max');
            // Or to get a key/value pair
            storage.get('name').then(function (val) {
                console.log('Your age is', val);
            });
        });
    }
    PerjalananPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerjalananPage');
    };
    //  ngAfterViewInit() {
    //     var input = document.getElementsByClassName('textSearch');
    //     var options = {componentRestrictions: {country: 'id'}};
    //     new google.maps.places.Autocomplete(input, options);
    // }
    PerjalananPage.prototype.initMap = function (geoLat, geoLong) {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 9,
            center: { lat: geoLat, lng: geoLong },
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            navigationControl: false,
            streetViewControl: false
        });
        this.directionsDisplay.setMap(this.map);
    };
    PerjalananPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.start,
            destination: this.end,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
                _this.computeTotalDistance(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
        //   this.distanceMatrix.getDistanceMatrix(
        //   	{
        //       origins: [this.start],
        //       destinations: [this.end],
        //     travelMode: 'DRIVING',
        //     avoidHighways: false,
        //     avoidTolls: false,
        // }, (response, status) => {
        //      if (status === 'OK') {
        //      	this.showAlert(response);
        //      } else {
        //        window.alert('Directions request failed due to ' + status);
        //      }
        // }
        //   );
    };
    PerjalananPage.prototype.computeTotalDistance = function (result) {
        var total = 0;
        var myroute = result.routes[0];
        for (var i = 0; i < myroute.legs.length; i++) {
            total += myroute.legs[i].distance.value;
        }
        total = total / 1000;
        this.showAlert('total : ' + total + ' km');
    };
    PerjalananPage.prototype.showAlert = function (msgAlert) {
        var alert = this.alertCtrl.create({
            title: 'Direction',
            subTitle: msgAlert,
            buttons: ['OK']
        });
        alert.present();
    };
    return PerjalananPage;
}());
__decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */]('map'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], PerjalananPage.prototype, "mapElement", void 0);
PerjalananPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-perjalanan',template:/*ion-inline-start:"D:\project\Safarii\src\pages\perjalanan\perjalanan.html"*/'<!--\n  Generated template for the PerjalananPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n      Perjalanan\n    </ion-title>\n\n    <ion-list>\n\n	<ion-item>\n	    <ion-input class="textSearch" type="text" placeholder="Lokasi Mulai..."  [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()"></ion-input>\n	 </ion-item>\n\n	  <ion-item>\n	    <ion-input class="textSearch" type="text" placeholder="Tujuan..." [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()"></ion-input>\n	  </ion-item>\n	</ion-list>\n  </ion-navbar>\n	\n</ion-header>\n\n\n<ion-content>\n  <!-- <div id="floating-panel">\n    <b>Start: </b>\n    <select [(ngModel)]="start" id="start" (change)="calculateAndDisplayRoute()">\n      \n    </select><br>\n    <b>End: </b>\n    <select [(ngModel)]="end" id="end" (change)="calculateAndDisplayRoute()">\n      \n    </select>\n    </div> -->\n    <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\perjalanan\perjalanan.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
], PerjalananPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=perjalanan.js.map
// CONCATENATED MODULE: ./src/pages/doa/doa.ts
/* harmony import */ var doa___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var doa___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var doa___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var doa___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DoaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DoaPage = (function () {
    function DoaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoaPage');
    };
    return DoaPage;
}());
DoaPage = doa___decorate([
    doa___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-doa',template:/*ion-inline-start:"D:\project\Safarii\src\pages\doa\doa.html"*/'<!--\n  Generated template for the DoaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>doa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\doa\doa.html"*/,
    }),
    doa___metadata("design:paramtypes", [doa___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], doa___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DoaPage);

//# sourceMappingURL=doa.js.map
// CONCATENATED MODULE: ./src/pages/panduan/panduan.ts
/* harmony import */ var panduan___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var panduan___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var panduan___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var panduan___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PanduanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PanduanPage = (function () {
    function PanduanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PanduanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PanduanPage');
    };
    return PanduanPage;
}());
PanduanPage = panduan___decorate([
    panduan___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-panduan',template:/*ion-inline-start:"D:\project\Safarii\src\pages\panduan\panduan.html"*/'<!--\n  Generated template for the PanduanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>panduan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\panduan\panduan.html"*/,
    }),
    panduan___metadata("design:paramtypes", [panduan___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], panduan___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], PanduanPage);

//# sourceMappingURL=panduan.js.map
// CONCATENATED MODULE: ./src/pages/fiqh/fiqh.ts
/* harmony import */ var fiqh___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var fiqh___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var fiqh___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var fiqh___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FiqhPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FiqhPage = (function () {
    function FiqhPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FiqhPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FiqhPage');
    };
    return FiqhPage;
}());
FiqhPage = fiqh___decorate([
    fiqh___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-fiqh',template:/*ion-inline-start:"D:\project\Safarii\src\pages\fiqh\fiqh.html"*/'<!--\n  Generated template for the FiqhPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>fiqh</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\fiqh\fiqh.html"*/,
    }),
    fiqh___metadata("design:paramtypes", [fiqh___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], fiqh___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], FiqhPage);

//# sourceMappingURL=fiqh.js.map
// CONCATENATED MODULE: ./src/pages/menu/menu.ts
/* harmony import */ var menu___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var menu___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var menu___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var menu___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var menu_MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.openPerjalanan = function () {
        this.navCtrl.push(PerjalananPage);
    };
    MenuPage.prototype.openDoa = function () {
        this.navCtrl.push(DoaPage);
    };
    MenuPage.prototype.openPanduan = function () {
        this.navCtrl.push(PanduanPage);
    };
    MenuPage.prototype.openFiqh = function () {
        this.navCtrl.push(FiqhPage);
    };
    return MenuPage;
}());
menu_MenuPage = menu___decorate([
    menu___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-menu',template:/*ion-inline-start:"D:\project\Safarii\src\pages\menu\menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  	<button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Safarii</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        Profile\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        History\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Setting\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Report a Problem\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Help\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!-- Content -->\n\n\n<ion-content padding id="homeContent">\n  <h3>SAFARII</h3>\n  <p>Panduan Sholat Dalam Perjalanan</p>\n  \n  <ion-card (click)="openPerjalanan()">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/iconPerjalanan.png">\n      </ion-avatar>\n      <ion-card-title>\n          Mulai Perjalanan\n      </ion-card-title>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)="openPanduan()">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/IconPanduanSholat.png">\n      </ion-avatar>\n      <ion-card-title>\n          Panduan Sholat Safar\n      </ion-card-title>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)="openDoa()">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/iconDoaPerjalanan.png">\n      </ion-avatar>\n      <ion-card-title>\n          Doa Perjalanan\n      </ion-card-title>\n    </ion-item>\n  </ion-card>\n\n  <ion-card (click)="openFiqh()">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/img/iconBuku.png">\n      </ion-avatar>\n      <ion-card-title>\n        Fiqh Sholat Safat\n      </ion-card-title>\n    </ion-item>\n  </ion-card>\n</ion-content>\n\n<!-- End of Content -->\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\project\Safarii\src\pages\menu\menu.html"*/,
    }),
    menu___metadata("design:paramtypes", [menu___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], menu___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], menu_MenuPage);

//# sourceMappingURL=menu.js.map
// CONCATENATED MODULE: ./src/pages/register/register.ts
/* harmony import */ var register___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var register___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var register___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var register___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var register_RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.doRegister = function () {
        this.navCtrl.setRoot(menu_MenuPage);
    };
    return RegisterPage;
}());
register_RegisterPage = register___decorate([
    register___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-register',template:/*ion-inline-start:"D:\project\Safarii\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding id="firstLogin">\n	<img src="assets/img/direction.png">\n\n	<h1>Register</h1>\n\n	<ion-list>\n\n		<ion-item>\n		<ion-label floating>Username</ion-label>\n		<ion-input type="text"></ion-input>\n		</ion-item>\n\n		<ion-item>\n		<ion-label floating>Password</ion-label>\n		<ion-input type="password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n	<button ion-button full (click)="doRegister()">Register</button>\n</ion-content>'/*ion-inline-end:"D:\project\Safarii\src\pages\register\register.html"*/,
    }),
    register___metadata("design:paramtypes", [register___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], register___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], register_RegisterPage);

//# sourceMappingURL=register.js.map
// CONCATENATED MODULE: ./src/pages/login/login.ts
/* harmony import */ var login___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var login___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
var login___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var login___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var login_LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, http, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.username = '';
        this.password = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showAlertLoginFailed = function () {
        var alert = this.alertCtrl.create({
            title: 'Gagal',
            subTitle: 'Login gagal.. silahkan ulangi',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.doRegister = function () {
        this.navCtrl.setRoot(register_RegisterPage);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        // var headers = new Headers();
        // headers.append("Accept", 'application/json');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded' );
        // let options = new RequestOptions({ headers: headers });
        var loader = this.loadingCtrl.create({
            content: "Logging in..."
        });
        loader.present();
        var postParams = {
            username: btoa(this.username),
            password: btoa(this.password),
            userId: 1
        };
        this.http.post("http://192.168.1.13/safarii/index.php/users/loginAuth", JSON.stringify(postParams)).map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.posts = data.data.children;
            // console.log("username :"+data.username); //fetch json
            // console.log("password :"+ data.password);
            if (data.status == 0) {
                loader.dismissAll();
                _this.showAlertLoginFailed();
                console.log('gagal');
            }
            else {
                loader.dismissAll();
                console.log('berhasil');
                _this.storage.set('id_users', data.id_users);
                _this.storage.set('username', data.username);
                _this.storage.set('password', data.password);
                _this.storage.set('nama_users', data.nama_users);
                _this.storage.set('email_users', data.email_users);
                console.log("username :" + data.username); //fetch json
                console.log("password :" + data.password);
                console.log("id_users :" + data.id_users);
                _this.navCtrl.setRoot(menu_MenuPage);
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
        // this.http.get("https://maps.googleapis.com/maps/api/js?key=AIzaSyDnj5UUBEeT0u7DHXRWSL4Br44QvFqJoOg").map(res => res.json()).subscribe(data => {
        //   // Read the result field from the JSON response.
        //   console.log(data);
        // });
    };
    return LoginPage;
}());
login_LoginPage = login___decorate([
    login___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-login',template:/*ion-inline-start:"D:\project\Safarii\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content padding id="firstLogin">\n	<!-- <h1>LOGIN</h1> -->\n	<img src="assets/img/iconLogin.png">\n\n\n	<ion-list>\n\n		<ion-item>\n		<ion-label floating>Username</ion-label>\n		<ion-input type="text" [(ngModel)]="username"></ion-input>\n		</ion-item>\n\n		<ion-item>\n		<ion-label floating>Password</ion-label>\n		<ion-input type="password" [(ngModel)]="password"></ion-input>\n		</ion-item>\n\n	</ion-list>\n	<button ion-button full (click)="doLogin()">Login</button>\n	<p>Or</p>\n	<a (click)="doRegister()">Register</a>\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\login\login.html"*/,
    }),
    login___metadata("design:paramtypes", [login___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], login___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], login___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], login___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], login_LoginPage);

//# sourceMappingURL=login.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__ = __webpack_require__(32);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, modalCtrl) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // modal splash
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
            _this.storage.get('id_users').then(function (val) {
                if (val == null)
                    _this.rootPage = login_LoginPage;
                else
                    _this.rootPage = menu_MenuPage;
            });
            statusBar.styleDefault();
            // splashScreen.hide(); removed
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"D:\project\Safarii\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\project\Safarii\src\app\app.html"*/
    }),
    app_component___metadata("design:paramtypes", [typeof (app_component__a = typeof app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */] !== "undefined" && app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]) === "function" && app_component__a || Object, typeof (app_component__b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && app_component__b || Object, typeof (app_component__c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && app_component__c || Object, typeof (app_component__d = typeof app_component___WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && app_component___WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && app_component__d || Object, typeof (app_component__e = typeof app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] !== "undefined" && app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]) === "function" && app_component__e || Object])
], app_component_MyApp);

var app_component__a, app_component__b, app_component__c, app_component__d, app_component__e;
// android map api : AIzaSyApHmrUyrqIsGmyJuRFaVR8dZXcH4LzM0k
// js map api : AIzaSyDnj5UUBEeT0u7DHXRWSL4Br44QvFqJoOg 
//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(2);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"D:\project\Safarii\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"D:\project\Safarii\src\pages\home\home.html"*/
    }),
    home___metadata("design:paramtypes", [home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(2);
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_splash_splash__ = __webpack_require__(32);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            HomePage,
            login_LoginPage,
            menu_MenuPage,
            PerjalananPage,
            PanduanPage,
            DoaPage,
            FiqhPage,
            register_RegisterPage,
            __WEBPACK_IMPORTED_MODULE_17__pages_splash_splash__["a" /* SplashPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(app_component_MyApp, {}, {
                links: [
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            HomePage,
            login_LoginPage,
            menu_MenuPage,
            PerjalananPage,
            PanduanPage,
            DoaPage,
            FiqhPage,
            register_RegisterPage,
            __WEBPACK_IMPORTED_MODULE_17__pages_splash_splash__["a" /* SplashPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            app_module___WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(34);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[33]);
//# sourceMappingURL=main.js.map