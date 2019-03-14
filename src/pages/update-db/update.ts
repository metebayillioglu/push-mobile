
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';


import { Storage } from '@ionic/storage';

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import { Configuration } from '../../base/Configuration';


import { AlertController } from 'ionic-angular/components/alert/alert-controller';

import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { HomeLandingPage } from '../home-landing/home-landing';
import { AnnouncementDetailPage } from '../announcement-detail/detail';
import { AnnouncementsReturnModel } from '../../EntityPush/AnnouncementsReturnModel';
import { AnnouncementsPage } from '../announcements/announcements';
import { Constants } from '../../base/Constants';
//import { Push, PushObject, PushOptions } from '@ionic-native/push';
declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})

export class UpdatePage {


  title = "";

  constructor(private constants: Constants,
    public navCtrl: NavController,
    private storage: Storage,
    private configuration: Configuration,

    private platform: Platform,
    private alertCtrl: AlertController,
    private push: Push) {
    //  this.versiyonKontrolEt();
    Constants.UstBarRenk = "#000";
    this.checkNetwork();
    //console.log('Device UUID is: ' + this.device.model);

    //  this.showAlert( window.screen.height, window.screen.height);
    if (window.screen.height > 1000) {
      console.log("sadas");
      this.storage.set("ipadmi", true);
    } else {
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



  initPushNotification() {
    console.log("push init");
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: this.configuration.GoogleAppId// '782570690315'// '185775868786'//824824079496
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      }/*,
      windows: {

      }*/
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
   
      this.RegIdKaydet(data.registrationId);
      //TODO - send device token to server
    });

    if (this.platform.is('ios')) {
      pushObject.on('notification').subscribe((data: any) => {
        console.log("mesaj geldi");
        console.log('data.message -> ' + data.message);
        console.log('JSON.stringify(data)) -> ' + JSON.stringify(data));
        console.log('data.additionalData.icerik) -> ' + data.additionalData.icerik);
        //if user using app and push notification comes
        if (data.additionalData.foreground) {
          // if application open, show popup
          let confirmAlert = this.alertCtrl.create({
            title: data.additionalData.mete ,
            message: data.additionalData.icerik,
            buttons: [{
              text: 'Close',
              role: 'cancel'
            }, {
              text: 'Detail',
              handler: () => {
                //TODO: Your logic here
                console.log(data.message);
                var duyuru: AnnouncementsReturnModel = new AnnouncementsReturnModel();
                duyuru.title = data.additionalData.mete ;
                duyuru.message = data.additionalData.icerik;
                duyuru.annoucncementId =  data.additionalData.duyuruID;
                duyuru.date = "";
                this.navCtrl.push(AnnouncementDetailPage, { duyuru: duyuru });
              }
            }]
          });
          confirmAlert.present();
        } else {
          //if user NOT using app and push notification comes
          //TODO: Your logic on click of push notification directly
          var duyuru: AnnouncementsReturnModel = new AnnouncementsReturnModel();
          duyuru.title = data.additionalData.mete;
          duyuru.message = data.additionalData.icerik;
          duyuru.annoucncementId = data.additionalData.duyuruID;
          duyuru.date = "";
          this.navCtrl.push(AnnouncementDetailPage, { duyuru: duyuru });
          console.log(data.message);
          //   this.nav.push(DetailsPage, { message: data.message });
          console.log('Push notification clicked');
        }
      });

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));

    } else { //android
      console.log("android notificatio")

      pushObject.on('notification').subscribe((data: any) => {
        console.log("mesaj geldi");
        console.log('message -> ' + JSON.stringify(data));
        console.log('message message -> ' + data.message);
        console.log('message titile -> ' + data.title);
        console.log('message additionalData.foreground -> ' + data.additionalData.foreground);
        //if user using app and push notification comes
        if (data.additionalData.foreground) {
          // if application open, show popup
          let confirmAlert = this.alertCtrl.create({
            title: data.title,
            message: data.message,
            buttons: [{
              text: 'Close',
              role: 'cancel'
            }, {
              text: 'Detail',
              handler: () => {
                //TODO: Your logic here
                console.log(data.message);
                var duyuru: AnnouncementsReturnModel = new AnnouncementsReturnModel();
                duyuru.title = data.title;
                duyuru.message = data.message;
                duyuru.annoucncementId = "1";
                duyuru.date = "";
                this.navCtrl.push(AnnouncementDetailPage, { duyuru: duyuru });
              }
            }]
          });
          confirmAlert.present();
        } else {
          console.log('Push notification clicked');
          //if user NOT using app and push notification comes
          //TODO: Your logic on click of push notification directly
          var duyuru: AnnouncementsReturnModel = new AnnouncementsReturnModel();
          duyuru.title = data.title;
          duyuru.message = data.message;
          duyuru.annoucncementId = "1";
          duyuru.date = "";
          this.navCtrl.push(AnnouncementDetailPage, { duyuru: duyuru });
          console.log(data.message);
          //   this.nav.push(DetailsPage, { message: data.message });

        }
      });

      pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));

    }

  }
  checkNetwork() {
    this.title = Configuration.appName;
    this.platform.ready().then(() => {
      console.log("yükeskelik" + this.platform.height.length);
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

        this.showAlert(this.constants.NoInternetConnection, this.constants.NoInternetCheck);
        this.sayfaGec();
        return 0;
      }
      else {

        //adwors aç
        // if (this.platform.is('ios')) {
        //   this.showAdmobBannerAds();
        // } else {
        //   this.showAdmobBannerAdsAndroid();
        // }


        this.versiyonKontrolEt();
      }
    }).catch(t => {
      this.showAlert(this.constants.NoInternetConnection + t, this.constants.NoInternetCheck);
      this.sayfaGec();
    });

  }

  showAlert(baslik, icerik) {
    let alert = this.alertCtrl.create({
      title: baslik,
      subTitle: icerik,
      buttons: ["Ok"]
    });
    alert.present();
  }


  versiyonKontrolEt() {
    this.initPushNotification();
    if (this.platform.is('ios')) {
      // This will only print when on iOS
      //  console.log('I am an iOS device!');
      //  console.log('I am an iOS ver!'+ this.platform..version().str);

    } else if (this.platform.is('android')) {
      //console.log('I am an android device!');
    }

    this.sayfaGec();

  }



  sayfaGec() {
    //this.navCtrl.push(TabsPage);
    this.GetConstant();
    //this.navCtrl.push(HomePage);
  }

  RegIdKaydet(regId) {
    console.log("regIdKaydet" + regId);
    this.storage.set("regId", regId);
  }

  GetConstant() {
   

    this.storage.get('email').then((val) => {
      if (val != null) {
        this.navCtrl.push(AnnouncementsPage);
      } else {
        this.navCtrl.push(HomeLandingPage);
      }
    });

  }

}
