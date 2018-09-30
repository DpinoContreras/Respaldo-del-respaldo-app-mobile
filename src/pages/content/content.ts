import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'guest');
    this.menuCtrl.enable(true, 'authenticated');
  }
}
