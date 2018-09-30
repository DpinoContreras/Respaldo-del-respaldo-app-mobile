import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../providers/index';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  
  isReadyToSave: boolean;
  
  form: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public contact:ContactService,
    public formBuilder: FormBuilder,public toastCtrl: ToastController) {
      this.form = formBuilder.group({
        name: ['',Validators.required],
        email: ['',Validators.required],
        message: ['',Validators.required],
      });
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  sendContact(){
    if (!this.form.valid) { return 0; }
  console.log(this.form.value);
  this.contact.send(this.form.value).subscribe((res:any)=>{
    let toast = this.toastCtrl.create({
      message: 'Formulario enviado con exito!',
      duration: 3000,
      position: 'top'
    })
    toast.present();}, 
    (err) => {
      let toast = this.toastCtrl.create({
        message: 'Error al enviar el formulario',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  this.navCtrl.setRoot('ContactPage');
  }

}

