import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AsignaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-asignatura',
  templateUrl: 'asignatura.html',
})
export class AsignaturaPage {

    selectedItem: any;
    icons: string[];
    items: Array<{title: string, note: string, fecha_de_carga: string, tipo: string, icon: string}>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
      // If we navigated to this page, we will have an item available as a nav param
      this.selectedItem = navParams.get('item');

      // Let's populate this page with some filler content for funzies
      this.icons = ['download'];

      this.items = [];
      for (let i = 1; i < 11; i++) {
        this.items.push({
          title: 'Archivo ' + i,
          note: 'Curso al cual se subio el archivo' + i,
          fecha_de_carga: 'Fecha_de_carga' + i,
          tipo: "",
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }
    }

    itemTapped(event, item) {
      // That's right, we're pushing to ourselves!
      this.navCtrl.push(AsignaturaPage, {
        item: item
      });
    }
  }
