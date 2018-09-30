import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, MenuController } from 'ionic-angular';
import { IonicStorageModule, Storage} from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Settings, User, Api, ContactService, DocumentService, CourseService } from '../providers';
import { TypeService } from '../providers/type/type';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    InAppBrowser,
    Base64ToGallery,
    Api,
    User,
    MenuController,
    StatusBar,
    SplashScreen,
    ContactService, DocumentService, CourseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TypeService
  ]
})
export class AppModule {}
