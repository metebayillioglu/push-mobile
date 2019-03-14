webpackJsonp([0],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(361);
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
 * Generated class for the HomeLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeLandingPage = /** @class */ (function () {
    function HomeLandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeLandingPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomeLandingPage.prototype.goToRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomeLandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeLandingPage');
    };
    HomeLandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-landing',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/home-landing/home-landing.html"*/'\n  <ion-content class="card-background-page content-bg">\n  \n</ion-content>\n\n<ion-footer>\n    <ion-toolbar class="back form-button" padding>\n      \n    <p class="footer-right">\n        <button ion-button color="primary"  block (click)="goToRegisterPage()" class="login-btn">Register</button>\n    </p>\n    <p class="footer-left">\n      <button ion-button color="primary"  block (click)="goToLoginPage()" class="login-btn" style="background: #a1a1a1;">Login</button>\n  </p>\n     \n    \n    </ion-toolbar>\n  </ion-footer>\n\n<style>\n  .button-md-secondary {\n    padding: 30px;\n}\n.button-md-primary {\n    padding: 30px;\n}\n  .login-btn {\n    background: #c1ab5c;\n    font-weight: bold;\n    font-size: 20px;\n    border-radius: 12px;\n}\n  .scroll-content {\n    background: #1a1a1a;\n}\n  .write-center{\n    text-align: center;\n    padding: 0px 10px;\n    color: #6d6d6d;\n  }\n  .write-center button{\n    text-align: center;\n  color: #667F97;\n  text-decoration: none;\n  font-weight: 700;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  margin: 0px;\n  padding: 0px;\n  line-height: 0px;\n  height: 18px;\n  margin-top: -10px;\n}\n  .footer-right{\n    width:100%;\n    float: right;\n    margin: 0px;\n  }\n  .footer-left{\n    width:100%;\n    float: left;\n    margin: 0px;\n  }\n  .line{\n    text-align:center;\n    color:#fff;\n    position: relative;\n    padding: 20px;\n  }\n  .line::before{\n    content: "";\n  background: #fff;\n  width: 100%;\n  height: 1px;\n  margin-top: 8px;\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  }\n  .line span{\n    background: #1a1a1a;\n  z-index: 9999;\n  position: relative;\n  /* margin: 21px; */\n  padding: 0px 15px;\n  }\n  .content { \n    background: #F5F6F8;\n    padding: 20px;\n    text-align: center;\n}\n.tabbar{\n  display: none;\n}\n.forgot{\n  text-align: center;\n  font-size: 15px;\n}\n.forgot button{\n  text-align: center;\n  color: #667F97;\n    text-decoration: none;\n    font-weight: 700;\n    outline: none;\n    background: transparent;\n    font-size: 15px;\n}\n.list-ios {\n    margin: -1px 0 15px;\n    border-left: 0.55px solid #c8c7cc;\n    border-right: 0.55px solid #c8c7cc;\n}\n.button-outline-ios-primary.activated{\n  color: #fff !important;\n  background: rgb(194, 172, 87);\n}\n</style>'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/home-landing/home-landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomeLandingPage);
    return HomeLandingPage;
}());

//# sourceMappingURL=home-landing.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Configuration__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicePush_login_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EntityPush_LoginModel__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_reset_password_reset__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__announcements_announcements__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(storage, navCtrl, loadingCtrl, loginPushService, configuration, platform, alertCtrl, regIdService) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginPushService = loginPushService;
        this.configuration = configuration;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.regIdService = regIdService;
        this.title = "";
        this.text = "";
        this.password = "";
        this.email = "";
        this.user = new __WEBPACK_IMPORTED_MODULE_5__EntityPush_LoginModel__["a" /* LoginModel */]();
    }
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.ngOnInit = function () {
        this.title = __WEBPACK_IMPORTED_MODULE_3__base_Configuration__["a" /* Configuration */].appName;
        this.text = "Lütfen asdasdasdasd web sayfasında bulunan bilgileriniz ile giriş yapınız...";
        this.LocalControl();
        this.GetRegId();
        //this.email = "metebayillioglu@gmail.com"
        // this.password = "mete1905mete"
    };
    LoginPage.prototype.GetRegId = function () {
        var _this = this;
        this.storage.get('regId').then(function (val) {
            _this.regId = val;
        }).catch(function (t) {
            _this.regId = "hata";
        });
    };
    LoginPage.prototype.LocalControl = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            _this.email = val;
            _this.email = "metebayillioglu@gmail.com";
        });
        this.storage.get('password').then(function (val) {
            _this.password = val;
            _this.password = "mete";
        });
    };
    LoginPage.prototype.loginControl = function () {
        var _this = this;
        if (this.email == "" || this.password == "") {
            this.showAlert("", "please fill in all fields");
            return;
        }
        if (!this.configuration.EmailIsvalid(this.email)) {
            this.showAlert("", "Email address not valid");
            return;
        }
        this.user = new __WEBPACK_IMPORTED_MODULE_5__EntityPush_LoginModel__["a" /* LoginModel */]();
        console.log(this.password);
        console.log(this.email);
        var loading = this.loadingCtrl.create({ content: 'Please Wait' });
        loading.present();
        this.user.Email = this.email;
        this.user.Password = this.password;
        this.loginPushService.UserControl(this.user).subscribe(function (t) {
            loading.dismiss();
            if (t.userId == "hata") {
                console.log("ok");
                _this.showAlert("Error Occured", "Please check the values you entered ");
                _this.error = "Please check the values you entered ";
                return;
            }
            else {
                _this.storage.set("userId", t.userId);
                _this.storage.set("key", t.key);
                _this.storage.set("password", _this.password);
                _this.storage.set("email", _this.email);
                _this.storage.get('regId').then(function (val) {
                    var model = new RegGonder();
                    model.RegId = val;
                    model.UserId = t.userId;
                    _this.regIdService.PostRegId(model).subscribe(function (t) {
                        // this.showAlert(t.text,t.text);
                    });
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__announcements_announcements__["a" /* AnnouncementsPage */]);
            }
        });
    };
    LoginPage.prototype.ForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__password_reset_password_reset__["a" /* PasswordResetPage */]);
    };
    LoginPage.prototype.checkNetwork = function () {
        var _this = this;
        this.title = "";
        this.platform.ready().then(function () {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            if (states[networkState] == states[Connection.NONE]) {
                _this.showAlert("Internet Connection Error", "You need internet connection to use app");
                return 0;
            }
            else {
                _this.loginControl();
            }
        }).catch(function (t) {
            _this.showAlert("Internet Connection Error", "You need internet connection to use app");
        });
    };
    LoginPage.prototype.showAlert = function (title, content) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/login/Login.html"*/'\n    <ion-header>\n\n      <ion-navbar>\n          <ion-title>\n             Login\n            </ion-title> \n      </ion-navbar>\n    \n    </ion-header>\n    <ion-content class="card-background-page content-bg">\n    \n    <!--<div class="sub-menu">\n      <p><button ion-button color="primary" class="first" block round style="background-color: #c2ac4e;">Giriş Yap</button></p>\n      <p><button ion-button color="primary" class="last" block round outline (click)="goToRegisterPage()" style="border-color: #c2ac4e;color: #c2ac4e;">Kaydol</button></p>\n    </div>-->\n    \n    \n    <div style="padding: 28px;\n    text-align: center;\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;">\n        <!-- <p class="line"><span>ŞUNUNLA HIZLICA BAĞLAN</span></p>\n        <button ion-button block round color="primary" block (click)="fbLogin()" style="background:#4267B2"> Facebook ile Giriş Yap</button>\n    \n    \n        <p class="line"><span>VEYA E-POSTANI KULLAN</span></p> -->\n    <ion-list>\n      <ion-item>\n        <ion-label>\n          <ion-col><ion-icon name="mail"></ion-icon></ion-col>\n        </ion-label>\n        <ion-input type="email" [(ngModel)]="email" placeholder="Email" clearInput pattern="/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/" required></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>\n          <ion-col><ion-icon name="lock"></ion-icon></ion-col>\n        </ion-label>\n        <ion-input type="password" [(ngModel)]="password" placeholder="Password" clearInput ></ion-input>\n      </ion-item>\n    </ion-list>\n    <p class="forgot"><button (click)="ForgotPassword()">Forgot Password</button></p>\n    \n\n          \n    <p class="footer-left" style="width:100%;    padding: 0px;\n    margin: 0px;">\n        <button ion-button color="secondary"  block round (click)="checkNetwork()" class="login-btn">Login</button>\n    </p>\n     \n    </div>\n    \n    </ion-content>\n    \n    \n    \n    <style>\n        .button-md-secondary {\n        padding: 30px;\n    }\n    .button-md-primary {\n        padding: 30px;\n    }\n      button.back-button.disable-hover.bar-button {\n        color: #c3ad46;\n    }\n    .login-btn {\n        background: #c1ab5c;\n        font-weight: bold;\n        font-size: 20px;\n        border-radius: 12px;\n    }\n      .sub-menu{\n        padding: 0px 76px;\n      }\n      .sub-menu p{\n        width: 50%;\n        float: left;\n      }\n      .sub-menu p .first{\n        border-radius: 10px 0px 0px 10px;\n      }\n      .sub-menu p .last{\n        border-radius: 0px 10px 10px 0px;\n      }\n      .sub-menu p button{\n        height:30px;\n      }\n    \n      .item-input ion-label {\n      color: #949494;\n    }\n      ion-item.item.item-block {\n      background: #ececec;\n      /* border-radius: 0px; */\n    }\n      .footer-right{\n        width:48%;\n        float: right;\n      }\n      .footer-left{\n        width:48%;\n        float: left;\n      }\n      .line{\n        text-align:center;\n        color:#fff;\n        position: relative;\n        padding: 20px;\n      }\n      .line::before{\n        content: "";\n      background: #fff;\n      width: 100%;\n      height: 1px;\n      margin-top: 8px;\n      position: absolute;\n      left: 0px;\n      right: 0px;\n      }\n      .line span{\n        background: #1a1a1a;\n      z-index: 9999;\n      position: relative;\n      /* margin: 21px; */\n      padding: 0px 15px;\n      }\n      .content { \n        background: #F5F6F8;\n        padding: 20px;\n        text-align: center;\n    }\n    .tabbar{\n      display: none;\n    }\n    .forgot{\n      text-align: center;\n      font-size: 15px;\n    }\n    .forgot button{\n      text-align: center;\n      color: #fff;\n        text-decoration: none;\n        font-weight: 700;\n        outline: none;\n        background: transparent;\n        font-size: 15px;\n    }\n    ion-list.list {\n      margin: -1px 0 15px;\n      /* border-right: 0.55px solid #c8c7cc; */\n      \n      overflow: hidden;\n    }\n    ion-item.item.item-block.item-input {\n      padding-right: 16px;\n        margin-bottom: 10px;\n        border-radius: 10px;\n    }\n    .list-ios > .item-block:last-child, .list-ios > .item-wrapper:last-child .item-block {\n      border-bottom: 0px;\n    }\n    \n    </style>\n    \n        \n\n  '/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/login/Login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__servicePush_login_service__["a" /* LoginPushService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__servicePush_login_service__["a" /* LoginPushService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__base_Configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__base_Configuration__["a" /* Configuration */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__["a" /* RegIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__["a" /* RegIdService */]) === "function" && _h || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegIdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Configuration__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//const { map, filter, switchMap } = require('rxjs/operators');
var RegIdService = /** @class */ (function () {
    function RegIdService(http, base) {
        this.http = http;
        this.base = base;
        this.saveRegIdUrl = this.base.saveRegIdUrl;
    }
    RegIdService.prototype.PostRegId = function (model) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = new FormData();
        data.append("UserId", model.UserId);
        data.append("RegId", model.RegId);
        console.log("reg2" + model.RegId);
        console.log("reg2" + model.UserId);
        return this.http
            .post(this.saveRegIdUrl, data, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log("asd");
            /*if(error.status == 201){
              var sonuc = new DonenSonuc();
              alert("Lütfen Kullanıcı Bilgilerinizi kontrol ediniz");
              return Observable.throw( sonuc);
            }*/
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
        });
    };
    RegIdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__base_Configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__base_Configuration__["a" /* Configuration */]) === "function" && _b || Object])
    ], RegIdService);
    return RegIdService;
    var _a, _b;
}());

//# sourceMappingURL=regId.Service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__announcements_announcements__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EntityPush_AnnouncementsReturnModel__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicePush_Announcements_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnnouncementDetailPage = /** @class */ (function () {
    function AnnouncementDetailPage(navCtrl, navParams, storage, announcementsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.announcementsService = announcementsService;
        this.announcementTitle = "";
        this.announcement = new __WEBPACK_IMPORTED_MODULE_5__EntityPush_AnnouncementsReturnModel__["a" /* AnnouncementsReturnModel */]();
        this.html = "";
        this.key = "";
        console.log("duyuru detay");
        this.announcement = this.navParams.get("announcement");
        this.html = this.announcement.message;
        this.announcementTitle = this.announcement.title;
    }
    AnnouncementDetailPage.prototype.DeleteAnnouncement = function () {
        var _this = this;
        this.storage.get('key').then(function (val) {
            _this.key = val;
            var announcementId = _this.announcement.annoucncementId;
            _this.announcementsService.DeleteAnnouncement(announcementId, _this.key).subscribe(function (t) {
                if (t.status == "ok") {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__announcements_announcements__["a" /* AnnouncementsPage */]);
                }
            });
        });
    };
    AnnouncementDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/announcement-detail/detail.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n       {{announcementTitle}}\n      </ion-title>\n\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content >\n\n<div class="title"> <h4 class="title">{{announcementTitle}} </h4></div>   \n    \n\n <h5 class="content" [innerHtml]="html"></h5>\n\n <p class="footer-left">\n  <button ion-button color="primary"  block (click)="DeleteAnnouncement()" class="login-btn" style="background: #a1a1a1;">Delete</button>\n</p>\n  \n    </ion-content>\n    '/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/announcement-detail/detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__servicePush_Announcements_service__["a" /* AnnouncementsService */]])
    ], AnnouncementDetailPage);
    return AnnouncementDetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Configuration__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//const { map, filter, switchMap } = require('rxjs/operators');
var AnnouncementsService = /** @class */ (function () {
    function AnnouncementsService(http, base) {
        this.http = http;
        this.base = base;
        this.announcementsUrl = this.base.announcementsUrl;
    }
    AnnouncementsService.prototype.GetAnnouncements = function (userId, key) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.announcementsUrl + "?userId=" + userId + "&key=" + key);
        return this.http
            .get(this.announcementsUrl + "?userId=" + userId + "&key=" + key, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log("asd");
            /*if(error.status == 201){
              var sonuc = new DonenSonuc();
              alert("Lütfen Kullanıcı Bilgilerinizi kontrol ediniz");
              return Observable.throw( sonuc);
            }*/
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
            /*this.base.TokenOlusmadiHataSayfasi(6);
               if (error.status === 500) {
      
                 //  return Observable.throw(new Error(error.status));
               }
               else if (error.status === 400) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 409) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 406) {
                   return Observable.throw(new Error(error.status));
               }*/
        });
        // .do((data) => console.log(""));
        // return this.http
        //   .post(this.loginUrl, data, requestOptions)
        //   .map((response: Response) => <DonenSonuc>response.json())
        //   .catch((error: any) => {
        //     //  alert("hi");
        //     if(error.status == 201){
        //       var sonuc = new DonenSonuc();
        //       return Observable.throw( sonuc); 
        //     }
        //     alert(error.status);
        //     //    this.base.TokenOlusmadiHataSayfasi(6);
        //     return Observable.throw(new Error(error.status));
        //     /*this.base.TokenOlusmadiHataSayfasi(6);
        //        if (error.status === 500) {
        //          //  return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 400) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 409) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 406) {
        //            return Observable.throw(new Error(error.status));
        //        }*/
        //   });
        // // .do((data) => console.log(""));
    };
    AnnouncementsService.prototype.DeleteAnnouncement = function (annoouncementsId, key) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(this.announcementsUrl + "/DeleteAnnouncements?annoouncementsId=" + annoouncementsId + "&key=" + key);
        return this.http
            .get(this.announcementsUrl + "/DeleteAnnouncements?annoouncementsId=" + annoouncementsId + "&key=" + key, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log("asd");
            /*if(error.status == 201){
              var sonuc = new DonenSonuc();
              alert("Lütfen Kullanıcı Bilgilerinizi kontrol ediniz");
              return Observable.throw( sonuc);
            }*/
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
            /*this.base.TokenOlusmadiHataSayfasi(6);
               if (error.status === 500) {
      
                 //  return Observable.throw(new Error(error.status));
               }
               else if (error.status === 400) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 409) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 406) {
                   return Observable.throw(new Error(error.status));
               }*/
        });
        // .do((data) => console.log(""));
        // return this.http
        //   .post(this.loginUrl, data, requestOptions)
        //   .map((response: Response) => <DonenSonuc>response.json())
        //   .catch((error: any) => {
        //     //  alert("hi");
        //     if(error.status == 201){
        //       var sonuc = new DonenSonuc();
        //       return Observable.throw( sonuc); 
        //     }
        //     alert(error.status);
        //     //    this.base.TokenOlusmadiHataSayfasi(6);
        //     return Observable.throw(new Error(error.status));
        //     /*this.base.TokenOlusmadiHataSayfasi(6);
        //        if (error.status === 500) {
        //          //  return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 400) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 409) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 406) {
        //            return Observable.throw(new Error(error.status));
        //        }*/
        //   });
        // // .do((data) => console.log(""));
    };
    AnnouncementsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__base_Configuration__["a" /* Configuration */]])
    ], AnnouncementsService);
    return AnnouncementsService;
}());

//# sourceMappingURL=Announcements.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Configuration__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Constants = /** @class */ (function () {
    function Constants() {
        this.SetConstant();
    }
    Constants.prototype.SetConstant = function () {
        this.NoAnnouncement = __WEBPACK_IMPORTED_MODULE_1__Configuration__["a" /* Configuration */].language == 1 ? "No Message found" : "No Message found";
        this.AnnoucementTitle = __WEBPACK_IMPORTED_MODULE_1__Configuration__["a" /* Configuration */].language == 1 ? "Messages" : "Messages";
        this.NoInternetConnection = __WEBPACK_IMPORTED_MODULE_1__Configuration__["a" /* Configuration */].language == 1 ? "İnternet Bağlantısı bulunamadı" : "There is no internet connection";
        this.NoInternetCheck = __WEBPACK_IMPORTED_MODULE_1__Configuration__["a" /* Configuration */].language == 1 ? "İnternet bağlantısı kurulamadığı için versiyon kontrolü yapılamadı. Lütfen son güncelleştirmeleri alabilmek için cihazınızı internete bağladıktan sonra uygulamayı açınız" : "The version check could not be done because the internet connection could not be established. Please open the application after connecting your device internete to get the latest updates";
        /*
        this.BildiriBaslik = Configuration.language == 1 ? "Bildiriler" : "Abstracts";
        this.BildiriYok = Configuration.language == 1 ? "Önümüzdeki Günlerde Yayınlanacaktır" : "Abstracts will be announced";
       this.FavoriBaslik = Configuration.language == 1 ? "Favorilerim" : "Favorites";
        this.FavoriYok = Configuration.language == 1 ? "Favoriniz bulunmaktadır" : "You have no favorites";
        this.GuneGoreProgramBaslik = Configuration.language == 1 ? "Bilimsel Program" : "Scientific Program";
        this.KonusmacilarTextBoxtArama = Configuration.language == 1 ? "Aramak istediğiniz kelimeyi giriniz" : "Enter the word you want to search";
        this.BildirilerTextBoxtArama = Configuration.language == 1 ? "Aramak istediğiniz kelimeyi giriniz" : "Enter the word you want to search";
        this.KonusmacilarBaslik = Configuration.language == 1 ? "Konuşmacılar" : "Speakers";
        this.LutfenBekleyiniz = Configuration.language == 1 ? "Lütfen Bekleyiniz" : "Please wait.";
        this.SponsorlarBaslik = Configuration.language == 1 ? "Sponsorlar" : "Sponsors";
        this.SuAndaBaslik = Configuration.language == 1 ? "Şu Anda" : "Now";
        this.SuAndaOturumYok = Configuration.language == 1 ? "Şu Anda oturum bulunmamaktadır" : "There is no session right now";
       this.TamamButton = Configuration.language == 1 ? "Tamam" : "Ok";
        this.TumTipler = Configuration.language == 1 ? "Tüm Tipler" : "All Types";
        this.TumGunler = Configuration.language == 1 ? "Tüm Günler" : "All Days";
        this.TumSalonlar = Configuration.language == 1 ? "Tüm Salonlar" : "All Halls";
        this.OturumTipiButton = Configuration.language == 1 ? "Oturum Tipi" : "Types";
        this.SalonTipiButton = Configuration.language == 1 ? "Salon" : "Halls";
        this.GunButtonText = Configuration.language == 1 ? "Gün" : "Day";
       this.AramaText = Configuration.language == 1 ? "Aramak istediğiniz kelimeyi giriniz" : "Search";
        this.IptalText = Configuration.language == 1 ? "İptal" : "Cancel";
        this.ReklamSayfasiAnasayfaText = Configuration.language == 1 ? "Anasayfa" : "Home Page";
        this.KonusmaciDetayOturumlar = Configuration.language == 1 ? "Oturumlar" : "Sessions";
        this.AltOturumlarText = Configuration.language == 1 ? "Alt Oturumlar" : "SubSessions";
        this.VersionCheck = Configuration.language == 1 ? "Lütfen Bekleyiniz. Veri Tabanı Kontrol ediliyor" : "Please Wait. Version is being checked...";

        this.VersionCheckGuncelleme = Configuration.language == 1 ? "Lütfen Bekleyiniz. Güncelleme Yapılıyor" : "Please wait. Updating in progress";

*/
    };
    // TamamButton;
    // BildiriBaslik;
    // BildiriYok;
    // FavoriBaslik;
    // FavoriYok;
    // GuneGoreProgramBaslik;
    // KonusmacilarTextBoxtArama;
    // BildirilerTextBoxtArama;
    // KonusmacilarBaslik;
    // LutfenBekleyiniz;
    // SponsorlarBaslik;
    // SuAndaBaslik;
    // SuAndaOturumYok;
    // InternetBaglantisiBulunamadi;
    // InternetYokCheckYapilamadi;
    // TamamButton;
    // TumTipler;
    // TumGunler;
    // TumSalonlar;
    // OturumTipiButton;
    // SalonTipiButton;
    // GunButtonText;
    // AramaText;
    // IptalText;
    // AltOturumlarText;
    // ReklamSayfasiAnasayfaText;
    // KonusmaciDetayOturumlar;
    // VersionCheck;
    // VersionCheckGuncelleme;
    Constants.UstBarRenk = "mete";
    Constants = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Constants);
    return Constants;
}());

//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Configuration__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_alert_alert_controller__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_landing_home_landing__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__announcement_detail_detail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EntityPush_AnnouncementsReturnModel__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__announcements_announcements__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__base_Constants__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var UpdatePage = /** @class */ (function () {
    function UpdatePage(constants, navCtrl, storage, configuration, platform, alertCtrl, push) {
        this.constants = constants;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.configuration = configuration;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.push = push;
        this.title = "";
        //  this.versiyonKontrolEt();
        __WEBPACK_IMPORTED_MODULE_14__base_Constants__["a" /* Constants */].UstBarRenk = "#000";
        this.checkNetwork();
        //console.log('Device UUID is: ' + this.device.model);
        //  this.showAlert( window.screen.height, window.screen.height);
        if (window.screen.height > 1000) {
            console.log("sadas");
            this.storage.set("ipadmi", true);
        }
        else {
            this.storage.set("ipadmi", false);
            // this.showAlert("iphone","iphone");
        }
    }
    // showAdmobBannerAdsAndroid() {
    //   if (this.configuration.adwordsTestOrtamiMi == "test") {
    //     console.log("test android")
    //     const bannerConfig: AdMobFreeBannerConfig = {
    //       isTesting: true,
    //       autoShow: true
    //     };
    //     this.admobFree.banner.config(bannerConfig);
    //     this.admobFree.banner.prepare()
    //       .then(() => {
    //         // banner Ad is ready
    //         // if we set autoShow to false, then we will need to call the show method here
    //       })
    //       .catch(e => console.log(e));
    //   } else {
    //     console.log("android reklam")
    //     const bannerConfig: AdMobFreeBannerConfig = {
    //       id: this.configuration.googleAdwordsKey,
    //       isTesting: false,
    //       autoShow: true
    //     };
    //     this.admobFree.banner.config(bannerConfig);
    //     this.admobFree.banner.prepare()
    //       .then(() => {
    //         console.log("android reklam geldi")
    //         // banner Ad is ready
    //         // if we set autoShow to false, then we will need to call the show method here
    //       })
    //       .catch(e => console.log("hata android reklam" + e));
    //   }
    // }
    // showAdmobBannerAds() {
    //   if (this.configuration.adwordsTestOrtamiMi == "test") {
    //     const bannerConfig: AdMobFreeBannerConfig = {
    //       isTesting: true,
    //       autoShow: true
    //     };
    //     this.admobFree.banner.config(bannerConfig);
    //     this.admobFree.banner.prepare()
    //       .then(() => {
    //         // banner Ad is ready
    //         // if we set autoShow to false, then we will need to call the show method here
    //       })
    //       .catch(e => console.log(e));
    //   } else {
    //     const bannerConfig: AdMobFreeBannerConfig = {
    //       id: this.configuration.iosAdwordsKey,
    //       isTesting: false,
    //       autoShow: true
    //     };
    //     this.admobFree.banner.config(bannerConfig);
    //     this.admobFree.banner.prepare()
    //       .then(() => {
    //         // banner Ad is ready
    //         // if we set autoShow to false, then we will need to call the show method here
    //       })
    //       .catch(e => console.log(e));
    //   }
    // }
    UpdatePage.prototype.initPushNotification = function () {
        var _this = this;
        console.log("push init");
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {
                senderID: this.configuration.GoogleAppId // '782570690315'// '185775868786'//824824079496
            },
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            } /*,
            windows: {
      
            }*/
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            _this.RegIdKaydet(data.registrationId);
            //TODO - send device token to server
        });
        if (this.platform.is('ios')) {
            pushObject.on('notification').subscribe(function (data) {
                console.log("mesaj geldi");
                console.log('data.message -> ' + data.message);
                console.log('JSON.stringify(data)) -> ' + JSON.stringify(data));
                console.log('data.additionalData.icerik) -> ' + data.additionalData.icerik);
                //if user using app and push notification comes
                if (data.additionalData.foreground) {
                    // if application open, show popup
                    var confirmAlert = _this.alertCtrl.create({
                        title: data.additionalData.mete,
                        message: data.additionalData.icerik,
                        buttons: [{
                                text: 'Close',
                                role: 'cancel'
                            }, {
                                text: 'Detail',
                                handler: function () {
                                    //TODO: Your logic here
                                    console.log(data.message);
                                    var duyuru = new __WEBPACK_IMPORTED_MODULE_12__EntityPush_AnnouncementsReturnModel__["a" /* AnnouncementsReturnModel */]();
                                    duyuru.title = data.additionalData.mete;
                                    duyuru.message = data.additionalData.icerik;
                                    duyuru.annoucncementId = data.additionalData.duyuruID;
                                    duyuru.date = "";
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__announcement_detail_detail__["a" /* AnnouncementDetailPage */], { duyuru: duyuru });
                                }
                            }]
                    });
                    confirmAlert.present();
                }
                else {
                    //if user NOT using app and push notification comes
                    //TODO: Your logic on click of push notification directly
                    var duyuru = new __WEBPACK_IMPORTED_MODULE_12__EntityPush_AnnouncementsReturnModel__["a" /* AnnouncementsReturnModel */]();
                    duyuru.title = data.additionalData.mete;
                    duyuru.message = data.additionalData.icerik;
                    duyuru.annoucncementId = data.additionalData.duyuruID;
                    duyuru.date = "";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__announcement_detail_detail__["a" /* AnnouncementDetailPage */], { duyuru: duyuru });
                    console.log(data.message);
                    //   this.nav.push(DetailsPage, { message: data.message });
                    console.log('Push notification clicked');
                }
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
        }
        else {
            console.log("android notificatio");
            pushObject.on('notification').subscribe(function (data) {
                console.log("mesaj geldi");
                console.log('message -> ' + JSON.stringify(data));
                console.log('message message -> ' + data.message);
                console.log('message titile -> ' + data.title);
                console.log('message additionalData.foreground -> ' + data.additionalData.foreground);
                //if user using app and push notification comes
                if (data.additionalData.foreground) {
                    // if application open, show popup
                    var confirmAlert = _this.alertCtrl.create({
                        title: data.title,
                        message: data.message,
                        buttons: [{
                                text: 'Close',
                                role: 'cancel'
                            }, {
                                text: 'Detail',
                                handler: function () {
                                    //TODO: Your logic here
                                    console.log(data.message);
                                    var duyuru = new __WEBPACK_IMPORTED_MODULE_12__EntityPush_AnnouncementsReturnModel__["a" /* AnnouncementsReturnModel */]();
                                    duyuru.title = data.title;
                                    duyuru.message = data.message;
                                    duyuru.annoucncementId = "1";
                                    duyuru.date = "";
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__announcement_detail_detail__["a" /* AnnouncementDetailPage */], { duyuru: duyuru });
                                }
                            }]
                    });
                    confirmAlert.present();
                }
                else {
                    console.log('Push notification clicked');
                    //if user NOT using app and push notification comes
                    //TODO: Your logic on click of push notification directly
                    var duyuru = new __WEBPACK_IMPORTED_MODULE_12__EntityPush_AnnouncementsReturnModel__["a" /* AnnouncementsReturnModel */]();
                    duyuru.title = data.title;
                    duyuru.message = data.message;
                    duyuru.annoucncementId = "1";
                    duyuru.date = "";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__announcement_detail_detail__["a" /* AnnouncementDetailPage */], { duyuru: duyuru });
                    console.log(data.message);
                    //   this.nav.push(DetailsPage, { message: data.message });
                }
            });
            pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
        }
    };
    UpdatePage.prototype.checkNetwork = function () {
        var _this = this;
        this.title = __WEBPACK_IMPORTED_MODULE_7__base_Configuration__["a" /* Configuration */].appName;
        this.platform.ready().then(function () {
            console.log("yükeskelik" + _this.platform.height.length);
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            if (states[networkState] == states[Connection.NONE]) {
                _this.showAlert(_this.constants.NoInternetConnection, _this.constants.NoInternetCheck);
                _this.sayfaGec();
                return 0;
            }
            else {
                //adwors aç
                // if (this.platform.is('ios')) {
                //   this.showAdmobBannerAds();
                // } else {
                //   this.showAdmobBannerAdsAndroid();
                // }
                _this.versiyonKontrolEt();
            }
        }).catch(function (t) {
            _this.showAlert(_this.constants.NoInternetConnection + t, _this.constants.NoInternetCheck);
            _this.sayfaGec();
        });
    };
    UpdatePage.prototype.showAlert = function (baslik, icerik) {
        var alert = this.alertCtrl.create({
            title: baslik,
            subTitle: icerik,
            buttons: ["Ok"]
        });
        alert.present();
    };
    UpdatePage.prototype.versiyonKontrolEt = function () {
        this.initPushNotification();
        if (this.platform.is('ios')) {
            // This will only print when on iOS
            //  console.log('I am an iOS device!');
            //  console.log('I am an iOS ver!'+ this.platform..version().str);
        }
        else if (this.platform.is('android')) {
            //console.log('I am an android device!');
        }
        this.sayfaGec();
    };
    UpdatePage.prototype.sayfaGec = function () {
        //this.navCtrl.push(TabsPage);
        this.GetConstant();
        //this.navCtrl.push(HomePage);
    };
    UpdatePage.prototype.RegIdKaydet = function (regId) {
        console.log("regIdKaydet" + regId);
        this.storage.set("regId", regId);
    };
    UpdatePage.prototype.GetConstant = function () {
        var _this = this;
        this.storage.get('email').then(function (val) {
            if (val != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__announcements_announcements__["a" /* AnnouncementsPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__home_landing_home_landing__["a" /* HomeLandingPage */]);
            }
        });
    };
    UpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/update-db/update.html"*/'<ion-header>\n    <ion-navbar >\n      <ion-title>\n    {{title}}\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n  \n   \n    </ion-content>\n    '/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/update-db/update.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14__base_Constants__["a" /* Constants */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__base_Constants__["a" /* Constants */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__base_Configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__base_Configuration__["a" /* Configuration */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_alert_alert_controller__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */]) === "function" && _g || Object])
    ], UpdatePage);
    return UpdatePage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=update.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Configuration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Configuration = /** @class */ (function () {
    function Configuration() {
        this.iosVersiyon = "1.2";
        this.androidVersiyon = "1.5";
        this.GoogleAppId = "359350162247";
        this.userLoginUrl = "http://api.pushforever.online/api/users/UserControl";
        this.newUserUrl = "http://api.pushforever.online/api/users/";
        this.forgotPasswordUrl = "http://api.pushforever.online/api/users/ForgetPassword";
        this.saveRegIdUrl = "http://api.pushforever.online/api/devices/";
        this.announcementsUrl = "http://api.pushforever.online/api/announcements";
    }
    Configuration.prototype.createAuthorizationHeaders = function (headers) {
        return headers;
    };
    Configuration.prototype.EmailIsvalid = function (email) {
        var bol = email.split('@');
        if (bol.length != 2) {
            return false;
        }
        var bolikinci = bol[1].split('.');
        if (bolikinci.length <= 1) {
            return false;
        }
        return true;
    };
    Configuration.appName = "Push Forever";
    Configuration.language = 2;
    Configuration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Configuration);
    return Configuration;
}());

//# sourceMappingURL=Configuration.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicePush_login_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_Configuration__ = __webpack_require__(33);
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
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PasswordResetPage = /** @class */ (function () {
    function PasswordResetPage(loginService, navCtrl, navParams, alertCtrl, configuration) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.configuration = configuration;
        this.txtEmail = "";
    }
    PasswordResetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PasswordResetPage');
    };
    PasswordResetPage.prototype.ResetPassword = function () {
        var _this = this;
        if (this.txtEmail == "") {
            this.showAlert("", "please fill in all fields");
            return;
        }
        if (!this.configuration.EmailIsvalid(this.txtEmail)) {
            this.showAlert("", "Email address not valid");
            return;
        }
        this.loginService.ParolaSifirla(this.txtEmail).subscribe(function (t) {
            _this.showAlert("", t.text);
        });
    };
    PasswordResetPage.prototype.showAlert = function (baslik, icerik) {
        var alert = this.alertCtrl.create({
            title: baslik,
            subTitle: icerik,
            buttons: ['Ok']
        });
        alert.present();
    };
    PasswordResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password-reset',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/password-reset/password-reset.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>\n       Forgot Password\n          </ion-title> \n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content class="card-background-page content-bg">\n  \n  <!--<div class="sub-menu">\n    <p><button ion-button color="primary" class="first" block round style="background-color: #c2ac4e;">Giriş Yap</button></p>\n    <p><button ion-button color="primary" class="last" block round outline (click)="goToRegisterPage()" style="border-color: #c2ac4e;color: #c2ac4e;">Kaydol</button></p>\n  </div>-->\n  \n  \n  <div style="padding: 28px;\n  text-align: center;\n  position: absolute;\n  bottom: 90px;\n  left: 0px;\n  right: 0px;">\n      <!-- <p class="line"><span>ŞUNUNLA HIZLICA BAĞLAN</span></p>\n      <button ion-button block round color="primary" block (click)="fbLogin()" style="background:#4267B2"> Facebook ile Giriş Yap</button>\n  \n  \n      <p class="line"><span>VEYA E-POSTANI KULLAN</span></p> -->\n  <ion-list>\n    <ion-item>\n      <ion-label>\n        <ion-col><ion-icon name="mail"></ion-icon></ion-col>\n      </ion-label>\n      <ion-input type="email" [(ngModel)]="txtEmail" placeholder="E-Mail" clearInput pattern="/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]*\.([a-z]{2,4})$/" required></ion-input>\n    </ion-item>\n  \n  </ion-list>\n  \n  <p class="footer-left" style="width:100%;    padding: 0px;\n  margin: 0px;">\n      <button ion-button color="secondary"  block round (click)="ResetPassword()" class="login-btn">Send</button>\n  </p>\n   \n  </div>\n  \n  </ion-content>\n  \n  \n  \n  <style>\n      .button-md-secondary {\n    padding: 30px;\n}\n.button-md-primary {\n    padding: 30px;\n}\n    button.back-button.disable-hover.bar-button {\n      color: #c3ad46;\n  }\n  .login-btn {\n      background: #c1ab5c;\n      font-weight: bold;\n      font-size: 20px;\n      border-radius: 12px;\n  }\n    .sub-menu{\n      padding: 0px 76px;\n    }\n    .sub-menu p{\n      width: 50%;\n      float: left;\n    }\n    .sub-menu p .first{\n      border-radius: 10px 0px 0px 10px;\n    }\n    .sub-menu p .last{\n      border-radius: 0px 10px 10px 0px;\n    }\n    .sub-menu p button{\n      height:30px;\n    }\n  \n    .item-input ion-label {\n    color: #949494;\n  }\n    ion-item.item.item-block {\n    background: #ececec;\n    /* border-radius: 0px; */\n  }\n    .footer-right{\n      width:48%;\n      float: right;\n    }\n    .footer-left{\n      width:48%;\n      float: left;\n    }\n    .line{\n      text-align:center;\n      color:#fff;\n      position: relative;\n      padding: 20px;\n    }\n    .line::before{\n      content: "";\n    background: #fff;\n    width: 100%;\n    height: 1px;\n    margin-top: 8px;\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    }\n    .line span{\n      background: #1a1a1a;\n    z-index: 9999;\n    position: relative;\n    /* margin: 21px; */\n    padding: 0px 15px;\n    }\n    .content { \n      background: #F5F6F8;\n      padding: 20px;\n      text-align: center;\n  }\n  .tabbar{\n    display: none;\n  }\n  .forgot{\n    text-align: center;\n    font-size: 15px;\n  }\n  .forgot button{\n    text-align: center;\n    color: #fff;\n      text-decoration: none;\n      font-weight: 700;\n      outline: none;\n      background: transparent;\n      font-size: 15px;\n  }\n  ion-list.list {\n    margin: -1px 0 15px;\n    /* border-right: 0.55px solid #c8c7cc; */\n    \n    overflow: hidden;\n  }\n  ion-item.item.item-block.item-input {\n    padding-right: 16px;\n      margin-bottom: 10px;\n      border-radius: 10px;\n  }\n  .list-ios > .item-block:last-child, .list-ios > .item-wrapper:last-child .item-block {\n    border-bottom: 0px;\n  }\n  \n  </style>'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/password-reset/password-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicePush_login_service__["a" /* LoginPushService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__base_Configuration__["a" /* Configuration */]])
    ], PasswordResetPage);
    return PasswordResetPage;
}());

//# sourceMappingURL=password-reset.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsReturnModel; });
var AnnouncementsReturnModel = /** @class */ (function () {
    function AnnouncementsReturnModel() {
    }
    return AnnouncementsReturnModel;
}());

//# sourceMappingURL=AnnouncementsReturnModel.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicePush_login_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EntityPush_RegisterModel__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_Configuration__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__announcements_announcements__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EntityPush_PostReg__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__EntityPush_PostReg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__EntityPush_PostReg__);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, loginPushService, navParams, alertCtrl, loadingCtrl, storage, regIdService, configuration) {
        this.navCtrl = navCtrl;
        this.loginPushService = loginPushService;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.regIdService = regIdService;
        this.configuration = configuration;
        this.txtNameSurname = "";
        this.txtEmail = "";
        this.txtPassword = "";
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    SignupPage.prototype.goToLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SignupPage.prototype.signUp = function () {
        var _this = this;
        if (this.txtNameSurname == "" || this.txtEmail == "" || this.txtPassword == "") {
            this.alertConnexionError();
            return;
        }
        if (!this.configuration.EmailIsvalid(this.txtEmail)) {
            this.alertMessage("", "Email address not valid");
            return;
        }
        var model = new __WEBPACK_IMPORTED_MODULE_4__EntityPush_RegisterModel__["a" /* RegisterModel */]();
        model.NameSurname = this.txtNameSurname;
        model.Email = this.txtEmail;
        model.Password = this.txtPassword;
        var loading = this.loadingCtrl.create({ content: "Please wait" });
        loading.present();
        this.loginPushService.PostNewUser(model).subscribe(function (t) {
            if (t.userId == "hata") {
                _this.alertMessage("Error Occured", "Please try again. If the error persists please contact us");
            }
            else {
                console.log("duyuur");
                _this.storage.set("userId", t.userId);
                _this.storage.set("key", t.key);
                _this.storage.set("email", _this.txtEmail);
                _this.storage.set("password", _this.txtPassword);
                var model = new __WEBPACK_IMPORTED_MODULE_9__EntityPush_PostReg__["PostReg"]();
                _this.storage.get('regId').then(function (val) {
                    console.log("reg1");
                    model.RegId = val;
                    model.UserId = t.userId;
                    _this.regIdService.PostRegId(model).subscribe(function (t) {
                        console.log("reg id");
                    });
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__announcements_announcements__["a" /* AnnouncementsPage */]);
            }
            loading.dismiss();
        });
    };
    SignupPage.prototype.alertMessage = function (_title, _message) {
        var alert = this.alertCtrl.create({
            title: _title,
            subTitle: _message,
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.alertConnexionError = function () {
        var alert = this.alertCtrl.create({
            title: '',
            subTitle: 'please fill in all fields      ',
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.login = function (user_login, user_password) {
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/signup/signup.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>\n        Register\n      </ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content class="card-background-page content-bg">\n  \n  \n    <div style="    margin-top: 180px;\n    padding: 20px;\n    text-align: center;\n    position: relative;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;">\n    \n      <ion-list>\n        <ion-item>\n          <ion-label>\n            <ion-col>\n              <ion-icon name="person"></ion-icon>\n            </ion-col>\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="txtNameSurname" placeholder="Name Surname" clearInput></ion-input>\n        </ion-item>\n     \n       \n        <ion-item>\n          <ion-label>\n            <ion-col>\n              <ion-icon name="mail"></ion-icon>\n            </ion-col>\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="txtEmail" placeholder="EMail" clearInput></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>\n            <ion-col>\n              <ion-icon name="lock"></ion-icon>\n            </ion-col>\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="txtPassword" placeholder="Password" clearInput></ion-input>\n        </ion-item>\n  \n      </ion-list>\n  \n  \n      <p class="footer-left" style="width:100%;    padding: 0px;\n    margin: 0px;">\n        <button ion-button color="secondary" block round (click)="signUp()" class="login-btn">Register</button>\n      </p>\n  \n    </div>\n  \n  </ion-content>\n  \n  \n  \n  <style>\n    ion-item.item.item-block.item-datetime {\n      border-radius: 10px;\n      margin-bottom: 9px;\n  }\n    .button-md-secondary {\n      padding: 30px;\n    }\n  \n    .button-md-primary {\n      padding: 30px;\n    }\n  \n    .login-btn {\n      background: #c1ab5c;\n      font-weight: bold;\n      font-size: 20px;\n      border-radius: 12px;\n    }\n  \n    ion-label.label {\n      color: #939393;\n    }\n  \n    ion-label#lbl-9 {\n      max-width: 38px;\n    }\n  \n    .sub-menu {\n      padding: 0px 76px;\n    }\n  \n    .sub-menu p {\n      width: 50%;\n      float: left;\n    }\n  \n    .sub-menu p .first {\n      border-radius: 64px 0px 0px 64px;\n    }\n  \n    .sub-menu p .last {\n      border-radius: 0px 64px 64px 0px;\n    }\n  \n    .sub-menu p button {\n      height: 30px;\n    }\n  \n    .item-input ion-label {\n      color: #949494;\n    }\n  \n    ion-item.item.item-block {\n      background: #ececec;\n      /* border-radius: 0px; */\n    }\n  \n    .footer-right {\n      width: 48%;\n      float: right;\n    }\n  \n    .footer-left {\n      width: 48%;\n      float: left;\n    }\n  \n    .line {\n      text-align: center;\n      color: #667F97;\n      position: relative;\n      padding: 20px;\n    }\n  \n    .line::before {\n      content: "";\n      background: #e2e2e2;\n      width: 100%;\n      height: 1px;\n      margin-top: 8px;\n      position: absolute;\n      left: 0px;\n      right: 0px;\n    }\n  \n    .line span {\n      background: #f5f6f8;\n      z-index: 9999;\n      position: relative;\n      /* margin: 21px; */\n      padding: 0px 15px;\n    }\n  \n    .content {\n      background: #F5F6F8;\n      padding: 20px;\n      text-align: center;\n    }\n  \n    .tabbar {\n      display: none;\n    }\n  \n    .forgot {\n      text-align: center;\n      font-size: 15px;\n    }\n  \n    .forgot button {\n      text-align: center;\n      color: #667F97;\n      text-decoration: none;\n      font-weight: 700;\n      outline: none;\n      background: transparent;\n      font-size: 15px;\n    }\n  \n    ion-list.list {\n      margin: -1px 0 15px;\n  \n    }\n  \n    ion-item.item.item-block.item-input {\n      padding-right: 16px;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n  \n    .list-ios>.item-block:last-child,\n    .list-ios>.item-wrapper:last-child .item-block {\n      border-bottom: 0px;\n    }\n  \n    ion-label#lbl-45 {\n      max-width: 30px;\n    }\n  </style>'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__servicePush_login_service__["a" /* LoginPushService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__servicePush_login_service__["a" /* LoginPushService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__["a" /* RegIdService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__servicePush_regId_Service__["a" /* RegIdService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__base_Configuration__["a" /* Configuration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__base_Configuration__["a" /* Configuration */]) === "function" && _h || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_update_db_update__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_landing_home_landing__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_password_reset_password_reset__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__servicePush_login_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__base_Configuration__ = __webpack_require__(33);
throw new Error("Cannot find module \"../services/push-register.service\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__servicePush_regId_Service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_announcements_announcements__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_announcement_detail_detail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__base_Constants__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__servicePush_Announcements_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_update_db_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_landing_home_landing__["a" /* HomeLandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_password_reset_password_reset__["a" /* PasswordResetPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_announcement_detail_detail__["a" /* AnnouncementDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_update_db_update__["a" /* UpdatePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_announcements_announcements__["a" /* AnnouncementsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_announcement_detail_detail__["a" /* AnnouncementDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_landing_home_landing__["a" /* HomeLandingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_password_reset_password_reset__["a" /* PasswordResetPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__servicePush_login_service__["a" /* LoginPushService */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__base_Configuration__["a" /* Configuration */],
                __WEBPACK_IMPORTED_MODULE_22__base_Constants__["a" /* Constants */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_14__services_push_register_service__["PushRegisterService"],
                __WEBPACK_IMPORTED_MODULE_15__servicePush_regId_Service__["a" /* RegIdService */],
                __WEBPACK_IMPORTED_MODULE_23__servicePush_Announcements_service__["a" /* AnnouncementsService */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_update_db_update__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_update_db_update__["a" /* UpdatePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnnouncementsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__announcement_detail_detail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_landing_home_landing__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_Constants__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servicePush_Announcements_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnnouncementsPage = /** @class */ (function () {
    function AnnouncementsPage(navCtrl, alertCtrl, storage, platform, loadingCtrl, constants, announcementsService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.constants = constants;
        this.announcementsService = announcementsService;
        this.viewCtrl = viewCtrl;
        this.title = "";
        this.isAnnouncement = false;
        this.duyuruYokKisiyeOzel = false;
        this.announcements = [];
        this.noAnnouncementsText = "";
        this.userId = "";
        this.key = "";
        this.GetLocalInformation();
        this.title = this.constants.AnnoucementTitle;
        this.noAnnouncementsText = this.constants.NoAnnouncement;
    }
    AnnouncementsPage.prototype.ionViewWillEnter = function () {
        this.viewCtrl.showBackButton(false);
    };
    AnnouncementsPage.prototype.checkNetwork = function () {
        var _this = this;
        this.platform.ready().then(function () {
            var networkState = navigator.connection.type;
            var states = {};
            states[Connection.UNKNOWN] = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI] = 'WiFi connection';
            states[Connection.CELL_2G] = 'Cell 2G connection';
            states[Connection.CELL_3G] = 'Cell 3G connection';
            states[Connection.CELL_4G] = 'Cell 4G connection';
            states[Connection.CELL] = 'Cell generic connection';
            states[Connection.NONE] = 'No network connection';
            console.log("network => " + states[networkState]);
            if (states[networkState] == states[Connection.NONE]) {
                console.log("false");
                _this.showAlert("Internet Connection Error", "You need internet connection to use app");
                return 0;
            }
            else {
                console.log("true");
                _this.GetAnnouncements();
            }
        }).catch(function (t) {
            _this.showAlert("Internet Connection Error", "You need internet connection to use app");
        });
    };
    AnnouncementsPage.prototype.showAlert = function (title, content) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: content,
            buttons: ['Ok']
        });
        alert.present();
    };
    AnnouncementsPage.prototype.GetLocalInformation = function () {
        var _this = this;
        this.storage.get('userId').then(function (val) {
            _this.storage.get('key').then(function (val2) {
                _this.userId = val;
                _this.key = val2;
                _this.checkNetwork();
            });
        });
    };
    AnnouncementsPage.prototype.LogOut = function () {
        this.storage.remove('email').then(function (val) {
        });
        this.storage.remove('userId').then(function (val) {
        });
        this.storage.remove('password').then(function (val) {
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_landing_home_landing__["a" /* HomeLandingPage */]);
    };
    AnnouncementsPage.prototype.GetAnnouncements = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: 'Please wait' });
        loading.present();
        this.announcementsService.GetAnnouncements(this.userId, this.key).subscribe(function (t) {
            _this.announcements = t;
            console.log(_this.announcements.length);
            if (_this.announcements.length == 0) {
                _this.isAnnouncement = true;
            }
            else {
                _this.isAnnouncement = false;
            }
            loading.dismiss();
        });
    };
    AnnouncementsPage.prototype.Detail = function (announcement) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__announcement_detail_detail__["a" /* AnnouncementDetailPage */], { announcement: announcement });
    };
    AnnouncementsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-announcements',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/announcements/announcements.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="LogOut()">\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n\n  <div class="noAnnouncements" *ngIf="isAnnouncement">{{noAnnouncementsText}}</div>\n\n\n  <ion-card *ngFor="let announcement of announcements" (click)="Detail(announcement)">\n    <ion-card-content>\n      <div class="title">\n        <h5>{{announcement.title}}</h5>\n      </div>\n\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/announcements/announcements.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__base_Constants__["a" /* Constants */],
            __WEBPACK_IMPORTED_MODULE_6__servicePush_Announcements_service__["a" /* AnnouncementsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], AnnouncementsPage);
    return AnnouncementsPage;
}());

//# sourceMappingURL=announcements.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel() {
    }
    return LoginModel;
}());

//# sourceMappingURL=LoginModel.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModel; });
var RegisterModel = /** @class */ (function () {
    function RegisterModel() {
    }
    return RegisterModel;
}());

//# sourceMappingURL=RegisterModel.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/metebayillioglu/Desktop/mac/projeler/KeypadV2/Keypad/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

//# sourceMappingURL=PostReg.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_Configuration__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//const { map, filter, switchMap } = require('rxjs/operators');
var LoginPushService = /** @class */ (function () {
    function LoginPushService(http, base) {
        this.http = http;
        this.base = base;
        this.loginUrl = this.base.userLoginUrl;
        this.registerUrl = this.base.newUserUrl;
        this.forgotPasswordUrl = this.base.forgotPasswordUrl;
    }
    LoginPushService.prototype.UserControl = function (model) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = new FormData();
        data.append("Email", model.Email);
        data.append("Password", model.Password);
        return this.http
            .post(this.loginUrl, data, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.log("asd");
            /*if(error.status == 201){
              var sonuc = new DonenSonuc();
              alert("Lütfen Kullanıcı Bilgilerinizi kontrol ediniz");
              return Observable.throw( sonuc);
            }*/
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
            /*this.base.TokenOlusmadiHataSayfasi(6);
               if (error.status === 500) {
      
                 //  return Observable.throw(new Error(error.status));
               }
               else if (error.status === 400) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 409) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 406) {
                   return Observable.throw(new Error(error.status));
               }*/
        });
        // .do((data) => console.log(""));
        // return this.http
        //   .post(this.loginUrl, data, requestOptions)
        //   .map((response: Response) => <DonenSonuc>response.json())
        //   .catch((error: any) => {
        //     //  alert("hi");
        //     if(error.status == 201){
        //       var sonuc = new DonenSonuc();
        //       return Observable.throw( sonuc); 
        //     }
        //     alert(error.status);
        //     //    this.base.TokenOlusmadiHataSayfasi(6);
        //     return Observable.throw(new Error(error.status));
        //     /*this.base.TokenOlusmadiHataSayfasi(6);
        //        if (error.status === 500) {
        //          //  return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 400) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 409) {
        //            return Observable.throw(new Error(error.status));
        //        }
        //        else if (error.status === 406) {
        //            return Observable.throw(new Error(error.status));
        //        }*/
        //   });
        // // .do((data) => console.log(""));
    };
    LoginPushService.prototype.PostNewUser = function (model) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = new FormData();
        data.append("Email", model.Email);
        data.append("Password", model.Parola);
        data.append("NameSurname", model.AdSoyad);
        return this.http
            .post(this.registerUrl, data, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //  alert("hi");
            alert(error.status);
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
            /*this.base.TokenOlusmadiHataSayfasi(6);
               if (error.status === 500) {
    
                 //  return Observable.throw(new Error(error.status));
               }
               else if (error.status === 400) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 409) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 406) {
                   return Observable.throw(new Error(error.status));
               }*/
        });
        // .do((data) => console.log(""));
    };
    LoginPushService.prototype.ParolaSifirla = function (email) {
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */](); //new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = new FormData();
        data.append("email", email);
        return this.http
            .post(this.forgotPasswordUrl, data, requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            //  alert("hi");
            alert(error.status);
            //    this.base.TokenOlusmadiHataSayfasi(6);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(new Error(error.status));
            /*this.base.TokenOlusmadiHataSayfasi(6);
               if (error.status === 500) {
    
                 //  return Observable.throw(new Error(error.status));
               }
               else if (error.status === 400) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 409) {
                   return Observable.throw(new Error(error.status));
               }
               else if (error.status === 406) {
                   return Observable.throw(new Error(error.status));
               }*/
        });
        // .do((data) => console.log(""));
    };
    LoginPushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__base_Configuration__["a" /* Configuration */]])
    ], LoginPushService);
    return LoginPushService;
}());

//# sourceMappingURL=login.service.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map