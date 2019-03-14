

import { Injectable } from "@angular/core";

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Configuration } from "../base/Configuration";
import { Observable } from "rxjs/Rx";
import { ReturnModel } from "../EntityPush/returnModel";
import { PostReg } from "../EntityPush/PostReg";
//const { map, filter, switchMap } = require('rxjs/operators');

@Injectable()
export class RegIdService {
    constructor(private http: Http, private base: Configuration) { }
    saveRegIdUrl = this.base.saveRegIdUrl;
  

    PostRegId(model:PostReg): Observable<ReturnModel> {

        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });//new Headers();
        let headers = new Headers();//new Headers();
        //headers = this.base.createAuthorizationHeaders(headers);
       
        var requestOptions = new RequestOptions({ headers: headers });

        let data = new FormData();
       

        data.append("UserId", model.UserId);
        data.append("RegId", model.RegId);
       
        console.log("reg2" + model.RegId );
        console.log("reg2" + model.UserId );
        return this.http
            .post(this.saveRegIdUrl, data, requestOptions)
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

            });



    }




}
