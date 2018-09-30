import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams, App, ViewController, MenuController } from 'ionic-angular';
import { User } from '../../providers';
//import { WelcomePage } from '../welcome/welcome';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // Our local settings object
  options: any;
  settingsReady = false;

  group: any;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(public navCtrl: NavController,
    public User: User,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public app: App,
    public menuCtrl: MenuController

    ) {
  }

  _buildForm() {

  }

  ionViewDidLoad() {
    this.options = sessionStorage.getItem("name"); 
    console.log('ionViewDidLoad');
    
  }

  ionViewWillEnter() {
    console.log('ionViewwillenter');

  }
  ngOnChanges() {
    console.log('Ng All Changes');
  }
  logout(){
    this.User.logout();
    window.location.replace('/');
  }
}
