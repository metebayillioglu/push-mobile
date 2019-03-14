import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform, AlertController } from 'ionic-angular';


import { Storage } from '@ionic/storage';
import { Configuration } from '../../base/Configuration';




import { LoginPushService } from '../../servicePush/login.service';
import { LoginModel } from '../../EntityPush/LoginModel';
import { RegIdService } from '../../servicePush/regId.Service';
import { PasswordResetPage } from '../password-reset/password-reset';
import { AnnouncementsPage } from '../announcements/announcements';
import { PostReg } from '../../EntityPush/PostReg';





declare var navigator: any;
declare var Connection: any;
@Component({
    selector: 'page-login',
    templateUrl: 'Login.html'
})

export class LoginPage implements OnInit {
    regId: string;
    title = "";
    text = "";

    constructor(
        private storage: Storage,
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        private loginPushService: LoginPushService,
        private configuration: Configuration,
        private platform: Platform,
        private alertCtrl: AlertController,
        private regIdService: RegIdService) {
    }
    ionViewWillEnter() {
       


    }
    ngOnInit() {
        this.title = Configuration.appName;
        this.text = "Lütfen asdasdasdasd web sayfasında bulunan bilgileriniz ile giriş yapınız...";
        this.LocalControl();
        this.GetRegId();
      //this.email = "metebayillioglu@gmail.com"
     // this.password = "mete1905mete"



    }
    GetRegId() {
        this.storage.get('regId').then((val) => {
            this.regId = val;
        }).catch(t => {
            this.regId = "hata";


        });
    }



    LocalControl() {
        this.storage.get('email').then((val) => {
            this.email = val;
            this.email = "metebayillioglu@gmail.com"
        });

        this.storage.get('password').then((val) => {
            this.password = val;
            this.password ="mete"
        });
    }

    password = "";
    email = "";
    error: string;
    user: LoginModel = new LoginModel();
    loginControl() {
        if(this.email == "" || this.password == ""){

            this.showAlert("","please fill in all fields");
            return;
        }
        if (!this.configuration.EmailIsvalid(this.email)) {
            this.showAlert("", "Email address not valid");
            return;
          }
        this.user = new LoginModel();


        console.log(this.password);
        console.log(this.email);
        let loading = this.loadingCtrl.create({ content: 'Please Wait' });
        loading.present();

        this.user.Email = this.email;
        this.user.Password = this.password;
      
        this.loginPushService.UserControl(this.user).subscribe(t => {
            loading.dismiss();
            if (t.userId == "hata") {
                
                console.log("ok");
                this.showAlert("Error Occured","Please check the values you entered ");
                this.error = "Please check the values you entered ";
                return;
                
            } else {
                this.storage.set("userId",t.userId);
                this.storage.set("key",t.key);
                this.storage.set("password",this.password);

                this.storage.set("email",this.email);
               
                this.storage.get('regId').then((val) => {

                    var model = new PostReg();
                    model.RegId = val;
                    model.UserId = t.userId;
                    this.regIdService.PostRegId(model).subscribe(t=>{
                  // this.showAlert(t.text,t.text);
                    });
              
                });
                this.navCtrl.push(AnnouncementsPage);
            }
      
        })


    }
  
   


    ForgotPassword() {
        this.navCtrl.push(PasswordResetPage);
    }

    checkNetwork() {
        this.title =  "";
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

            if (states[networkState] == states[Connection.NONE]) {

                this.showAlert("Internet Connection Error", "You need internet connection to use app");

                return 0;
            }
            else {

                this.loginControl();
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


}
