

import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http,Headers, RequestOptions,Response } from "@angular/http";
import { Configuration } from "../base/Configuration";
import { Observable } from "rxjs/Rx";
import { AnnouncementsReturnModel } from "../EntityPush/AnnouncementsReturnModel";
import { ReturnModel } from "../EntityPush/returnModel";

//const { map, filter, switchMap } = require('rxjs/operators');

@Injectable()
export class AnnouncementsService {
constructor(private http:Http,private base : Configuration){}
announcementsUrl  =this.base.announcementsUrl;


GetAnnouncements(userId:string, key:string): Observable<AnnouncementsReturnModel[]> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    //headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

console.log(this.announcementsUrl + "?userId="+userId+"&key="+key);
    return this.http
    .get(this.announcementsUrl + "?userId="+userId+"&key="+key, requestOptions)
    
    .map((response: Response) => <AnnouncementsReturnModel[]>response.json())
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



  DeleteAnnouncement( annoouncementsId:string,key:string): Observable<ReturnModel> {

    //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
    let headers = new Headers();//new Headers();
    //headers = this.base.createAuthorizationHeaders(headers);

    var requestOptions = new RequestOptions({ headers: headers });

console.log(this.announcementsUrl + "/DeleteAnnouncements?annoouncementsId="+annoouncementsId+"&key="+key);
    return this.http
    .get(this.announcementsUrl + "/DeleteAnnouncements?annoouncementsId="+annoouncementsId+"&key="+key, requestOptions)
    
    .map((response: Response) => <ReturnModel>response.json())
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




}
