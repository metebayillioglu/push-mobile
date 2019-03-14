import { Component } from '@angular/core';
import {  NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPushService } from '../../servicePush/login.service';
import { Configuration } from '../../base/Configuration';

/**
 * Generated class for the PasswordResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html',
})
export class PasswordResetPage {
  txtEmail = "";
  constructor(private loginService: LoginPushService,
     public navCtrl: NavController, 
     public navParams: NavParams, 
     private alertCtrl: AlertController,
     private configuration:Configuration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetPage');
  }
  ResetPassword() {
    if (this.txtEmail == "") {
      this.showAlert("", "please fill in all fields");
      return;
    }

    if (!this.configuration.EmailIsvalid(this.txtEmail)) {
      this.showAlert("", "Email address not valid");
      return;
    }


    this.loginService.ParolaSifirla(this.txtEmail).subscribe(t => {
      this.showAlert("", t.text);
    })
  }

  showAlert(baslik, icerik) {
    let alert = this.alertCtrl.create({
      title: baslik,
      subTitle: icerik,
      buttons: ['Ok']
    });
    alert.present();
  }

}
