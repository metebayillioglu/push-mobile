

import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http,Headers, RequestOptions,Response } from "@angular/http";
import { LoginModel } from "../EntityPush/LoginModel";
import { Configuration } from "../base/Configuration";
import { Observable } from "rxjs/Rx";
import { RegisterModel } from "../EntityPush/RegisterModel";

import { ReturnModel } from "../EntityPush/returnModel";
import { ReturnModelBase } from "../EntityPush/ReturnModelBase";

//const { map, filter, switchMap } = require('rxjs/operators');

@Injectable()
export class LoginPushService {
constructor(private http:Http,private base : Configuration){}
loginUrl =this.base.userLoginUrl;
registerUrl =this.base.newUserUrl;
forgotPasswordUrl  = this.base.forgotPasswordUrl;
UserControl(model: LoginModel): Observable<ReturnModelBase> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    //headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("Email", model.Email);
    data.append("Password", model.Password);


    return this.http
    .post(this.loginUrl, data, requestOptions)
    .map((response: Response) => <ReturnModelBase>response.json())
    .catch((error: any) => {
     console.log("asd");
      /*if(error.status == 201){
        var sonuc = new DonenSonuc();
        alert("Lütfen Kullanıcı Bilgilerinizi kontrol ediniz");
        return Observable.throw( sonuc); 
      }*/

     
      //    this.base.TokenOlusmadiHataSayfasi(6);
      return Observable.throw(new Error(error.status));
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



  }


  PostNewUser(model: RegisterModel): Observable<ReturnModelBase> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
   //headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();

    data.append("Email", model.Email);
    data.append("Password", model.Password);
    data.append("NameSurname", model.NameSurname);


    return this.http
      .post(this.registerUrl, data, requestOptions)
      .map((response: Response) => <ReturnModelBase>response.json())
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //    this.base.TokenOlusmadiHataSayfasi(6);
        return Observable.throw(new Error(error.status));
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



  }
  ParolaSifirla(email:string): Observable<ReturnModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    //headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

    let data = new FormData();


    data.append("email",email);


    return this.http
      .post(this.forgotPasswordUrl, data, requestOptions)
      .map((response: Response) => <ReturnModel>response.json())
      .catch((error: any) => {
        //  alert("hi");
        alert(error.status);
        //    this.base.TokenOlusmadiHataSayfasi(6);
        return Observable.throw(new Error(error.status));
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



  }

}
