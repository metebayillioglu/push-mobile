import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import { AnnouncementsPage } from '../announcements/announcements';
import { AnnouncementsReturnModel } from '../../EntityPush/AnnouncementsReturnModel';
import { AnnouncementsService } from '../../servicePush/Announcements.service';


@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class AnnouncementDetailPage {
  announcementTitle = "";
  announcement: AnnouncementsReturnModel = new AnnouncementsReturnModel();
  html = "";
  key = "";
  constructor(private navCtrl: NavController,private navParams:NavParams,
    private storage: Storage,
    private announcementsService: AnnouncementsService) {
    console.log("duyuru detay");
    this.announcement = this.navParams.get("announcement");
    this.html = this.announcement.message;
    this.announcementTitle = this.announcement.title;
   

  }

 


  DeleteAnnouncement() {
    this.storage.get('key').then((val) => {
      this.key = val;
      var announcementId = this.announcement.annoucncementId;
      this.announcementsService.DeleteAnnouncement(announcementId, this.key).subscribe(t => {
        if (t.status == "ok") {
          this.navCtrl.push(AnnouncementsPage);
        }
      })

    });
  }

}
