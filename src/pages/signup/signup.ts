import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { LoginPushService } from '../../servicePush/login.service';
import { RegisterModel } from '../../EntityPush/RegisterModel';
import { Storage } from '@ionic/storage';
import { RegIdService } from '../../servicePush/regId.Service';
import { Configuration } from '../../base/Configuration';
import { AnnouncementsPage } from '../announcements/announcements';
import { PostReg } from '../../EntityPush/PostReg';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  txtNameSurname = "";
  txtEmail = "";
  txtPassword = "";
  constructor(public navCtrl: NavController,
    private loginPushService: LoginPushService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,  
     private storage: Storage,
    private regIdService: RegIdService,
    private configuration:Configuration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }
  

  signUp() {

    if (this.txtNameSurname == "" || this.txtEmail == "" || this.txtPassword == "") {
      this.alertConnexionError();
      return;
    }
    if (!this.configuration.EmailIsvalid(this.txtEmail) ) {
      this.alertMessage("", "Email address not valid");
      return;
    }

    


    var model = new RegisterModel();
    model.NameSurname = this.txtNameSurname;
    model.Email = this.txtEmail;
    model.Password = this.txtPassword;
    let loading = this.loadingCtrl.create({ content: "Please wait"});
    loading.present();
    this.loginPushService.PostNewUser(model).subscribe(t => {
      if (t.userId == "hata") {
        this.alertMessage("Error Occured", "Please try again. If the error persists please contact us");
      } else {
           console.log("duyuur");
          this.storage.set("userId",t.userId);
          this.storage.set("key",t.key);
          this.storage.set("email",this.txtEmail);
          this.storage.set("password",this.txtPassword);
          var model = new PostReg();
          this.storage.get('regId').then((val) => {

            console.log("reg1");
              model.RegId = val;
              model.UserId = t.userId;
              this.regIdService.PostRegId(model).subscribe(t=>{
                console.log("reg id")
              });
        
          });
        
          this.navCtrl.push(AnnouncementsPage);
          
      }
      loading.dismiss();
    })

  }


  alertMessage(_title, _message) {
    let alert = this.alertCtrl.create({
      title: _title,
      subTitle: _message,
      buttons: ['OK']
    });
    alert.present();
  }



  alertConnexionError() {
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'please fill in all fields      ',
      buttons: ['OK']
    });
    alert.present();
  }




  login(user_login, user_password) {

  }

}
