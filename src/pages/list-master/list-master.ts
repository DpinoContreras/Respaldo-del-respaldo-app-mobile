import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { DocumentService } from '../../providers';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: any;
  selectedItem: any;
  icons: string[];
  Documentos:any;
  error:any;
  items: Array<{title: string, note: string, note2: string, fecha: string, tipo: string, icon: string}>;

  constructor(public navCtrl: NavController,private iab: InAppBrowser, public modalCtrl: ModalController, public document:DocumentService) {
    // Let's populate this page with some filler content for funzies
    this.icons = ['download'];
    this.document.get().subscribe((res:any) =>
    {  if (res.data.length==0) {
        this.error="Aun no has descagados Documentos";
      } else {this.Documentos=res.data;}
          }
    );
    }

  //this.prueba = this.currentItems.subscribe((data: Cu) => this.prueba = JSON.stringify(data));



  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {


  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    /*let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
        console.log(item);

      }
    })
    addModal.present();
  */  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem() {
    //this.items.delete(item);
  }

  /**
    * Navigate to the detail page for this item.
   */
  openItem(code) {
    this.document.getByCode(code).subscribe(
      (res:any) =>{
        const linkSource = 'data:application/pdf;base64,'+ res.document;
      //  this.iab.create(linkSource);

        //console.log(linkSource);
        window.open(linkSource, '_system', 'location=yes');
      }
    );
}
}
