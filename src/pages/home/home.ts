import { Component } from '@angular/core';
import { NavController, MenuController, ToastController } from 'ionic-angular';
import { User } from '../../providers/user/user'
declare const gapi: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public userService: User
    ) {
    this.menuCtrl.enable(false, 'guest');
    this.menuCtrl.enable(false, 'authenticated');
    this.attachSignin();
  }
  login() {
    this.navCtrl.push('LoginPage');
  }

  guest() {
    sessionStorage.setItem("name","Invitado");
    this.navCtrl.setRoot('GuestPage');
  }


    googleInit() {
      return new Promise((resolve, reject) => {
        gapi.load('auth2', () => {
          let auth2 = gapi.auth2.init({
            client_id: '89684032029-c6ulk19fgha48kjnrvhoaa7ku5uqcmf0.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            scope: 'profile email'
          });
          resolve(auth2);
        });
      });
    }

    attachSignin() {
      this.googleInit().then( (auth2: any) => {
        let element = document.getElementById('btnGoogle');
        auth2.attachClickHandler( element, {}, (googleUser) => {
        let token = googleUser.getAuthResponse().id_token;
        sessionStorage.setItem("token",token);
        var tokenv2 = {
          token: token
        }
        this.userService.auth(tokenv2).subscribe((resp) => {
           this.navCtrl.setRoot('ContentPage');
         }, (err) => {
           //this.navCtrl.push(MainPage);
           // Unable to log in
           let toast = this.toastCtrl.create({
             message: 'Error al iniciar sesión',
             duration: 3000,
             position: 'top'
           });
           toast.present();
         });
        });
      });
    }
}
