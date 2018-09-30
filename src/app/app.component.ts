import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  pages: any[] = [
    { title: 'Inicio', component: 'GuestPage' },
    { title: 'Archivo Recientes', component: 'ListMasterPage' },
    { title: 'Buscar', component: 'SearchPage' },
    { title: 'Quienes Somos', component: 'AboutUsPage' },
    { title: 'Contacto', component: 'ContactPage' },
    { title: 'Configuraciones', component: 'SettingsPage' }
  ]
  paginas: any[] = [
    { title: 'Inicio', component: 'ContentPage' },
    { title: 'Quienes Somos', component: 'AboutUsPage' },
    { title: 'Contacto', component: 'ContactPage' },
    { title: 'Mis Archivo', component: 'MyFilesPage' },
    { title: 'Subir Archivo', component: 'UploadFilesPage' },
    { title: 'Buscar', component: 'SearchPage' },
    { title: 'Configuraciones', component: 'SettingsPage' }
  ]  
  name:any;
  img:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page){
    this.name = sessionStorage.getItem("name");
    this.img = sessionStorage.getItem("img");
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
