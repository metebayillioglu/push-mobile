import { Injectable } from "@angular/core";
import { Configuration } from "./Configuration";


@Injectable()
export class Constants {
    NoAnnouncement;
    AnnoucementTitle;
     NoInternetConnection;
     NoInternetCheck;
    
    static UstBarRenk = "mete";
    constructor() {
        this.SetConstant();


    }

    SetConstant() {
        this.NoAnnouncement = Configuration.language == 1 ? "No Message found" : "No Message found";
        this.AnnoucementTitle = Configuration.language == 1 ? "Messages" : "Messages";
        this.NoInternetConnection = Configuration.language == 1 ? "İnternet Bağlantısı bulunamadı" : "There is no internet connection";
        this.NoInternetCheck = Configuration.language == 1 ? "İnternet bağlantısı kurulamadığı için versiyon kontrolü yapılamadı. Lütfen son güncelleştirmeleri alabilmek için cihazınızı internete bağladıktan sonra uygulamayı açınız" : "The version check could not be done because the internet connection could not be established. Please open the application after connecting your device internete to get the latest updates";
       
   
    }





}