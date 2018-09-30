import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DocumentService, User } from '../../providers';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the MyFilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-files',
  templateUrl: 'my-files.html',
})
export class MyFilesPage {
  MyDocuments:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public documento:DocumentService,
    private iab: InAppBrowser,
    public user: User) {
      this.documento.getByOwner(parseInt(sessionStorage.getItem("pk"))).subscribe((res:any)=>{
      this.MyDocuments=res.data;
      console.log(res);}
      );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFilesPage');
  }
  openItem(code) {
    this.documento.getByCode(code).subscribe(
      (res:any) =>{
        const linkSource = 'data:application/pdf;base64,'+ res.document;
   //     this.iab.create(linkSource);
        //console.log(linkSource);
        window.open(linkSource, '_system', 'location=yes');
      }
    );
}
}
