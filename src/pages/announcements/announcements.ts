import { Component } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AnnouncementsReturnModel } from '../../EntityPush/AnnouncementsReturnModel';
import { AnnouncementDetailPage } from '../announcement-detail/detail';
import { HomeLandingPage } from '../home-landing/home-landing';
import { Constants } from '../../base/Constants';
import { AnnouncementsService } from '../../servicePush/Announcements.service';

declare var navigator: any;
declare var Connection: any;
@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html'
})
export class AnnouncementsPage {
  title = "";
  isAnnouncement = false;
  duyuruYokKisiyeOzel = false;
  announcements: AnnouncementsReturnModel[] = [];
  noAnnouncementsText = "";
  userId = "";
  key = "";
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private constants: Constants,
    private announcementsService: AnnouncementsService,
    private viewCtrl: ViewController) {
    this.GetLocalInformation();
    this.title = this.constants.AnnoucementTitle;
    this.noAnnouncementsText = this.constants.NoAnnouncement;

  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);


  }
  checkNetwork() {
    this.platform.ready().then(() => {
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
        this.showAlert("Internet Connection Error", "You need internet connection to use app");

        return 0;
      }
      else {
        console.log("true");
        this.GetAnnouncements();
      }
    }).catch(t => {
      this.showAlert("Internet Connection Error", "You need internet connection to use app");

    });

  }
  showAlert(title, content) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: ['Ok']
    });
    alert.present();
  }

  GetLocalInformation() {
    this.storage.get('userId').then((val) => {
      this.storage.get('key').then((val2) => {
        this.userId = val;
        this.key = val2;
        this.checkNetwork();
      });


    });
  }
  LogOut() {
    this.storage.remove('email').then((val) => {
     
    })

    this.storage.remove('userId').then((val) => {
   
    })

    this.storage.remove('password').then((val) => {
     
    })
 

    this.navCtrl.push(HomeLandingPage);
  }


  GetAnnouncements() {
    let loading = this.loadingCtrl.create({ content: 'Please wait' });
    loading.present();
    this.announcementsService.GetAnnouncements(this.userId, this.key).subscribe(t => {
      this.announcements = t;
      console.log(this.announcements.length)
      if (this.announcements.length == 0) {
        this.isAnnouncement = true;
      } else {
        this.isAnnouncement = false;
      }

      loading.dismiss();

    })

  }
  Detail(announcement) {
    this.navCtrl.push(AnnouncementDetailPage, { announcement: announcement });
  }


}
