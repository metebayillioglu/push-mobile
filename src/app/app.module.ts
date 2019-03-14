import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpdatePage } from '../pages/update-db/update';
import { LoginPage } from '../pages/login/login';
import { HomeLandingPage } from '../pages/home-landing/home-landing';
import { SignupPage } from '../pages/signup/signup';
import { PasswordResetPage } from '../pages/password-reset/password-reset';
import { LoginPushService } from '../servicePush/login.service';
import { Configuration } from '../base/Configuration';
import { RegIdService } from '../servicePush/regId.Service';
import { Push } from '@ionic-native/push';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { Device } from '@ionic-native/device';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { AnnouncementDetailPage } from '../pages/announcement-detail/detail';
import { Constants } from '../base/Constants';
import { AnnouncementsService } from '../servicePush/Announcements.service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpdatePage,

    LoginPage,
    HomeLandingPage,
    SignupPage,
    PasswordResetPage,
    AnnouncementsPage,
    AnnouncementDetailPage,
    
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
    UpdatePage,
    LoginPage,
    AnnouncementsPage,
    AnnouncementDetailPage,
    HomeLandingPage,
    SignupPage,
    PasswordResetPage,
  ],
  providers: [
    StatusBar,
    LoginPushService,
    SplashScreen,
    Configuration,
    Constants,
    Push,
    RegIdService,
    AnnouncementsService,
    Device,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
