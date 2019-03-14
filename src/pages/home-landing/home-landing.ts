import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the HomeLandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home-landing',
  templateUrl: 'home-landing.html',
})
export class HomeLandingPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

 

  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }
  goToRegisterPage() {
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeLandingPage');
  }

}
