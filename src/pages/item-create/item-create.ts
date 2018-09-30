import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, MenuController } from 'ionic-angular';
//import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;
  Items:any;
  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public menuCtrl: MenuController) {
    this.form = formBuilder.group({
      archivo: ['',Validators.required],
      tipo: ['',Validators.required],
      base64: ['',Validators.required],
      first_name: ['', Validators.required],
      token: ['']
    });
    this.menuCtrl.enable(false, 'guest');
    this.menuCtrl.enable(false, 'authenticated');
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  getPicture() {
      this.fileInput.nativeElement.click();
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      let base64 = imageData.split(",");
      let data =base64[0].split(":");
      let base = data[1].split(";");
      let mime = base[0];
      this.form.patchValue({ 'tipo': mime });
      this.form.patchValue({ 'base64': base64[1] });
      this.form.patchValue({ 'token': sessionStorage.getItem("token") });
    };
    this.form.patchValue({ 'archivo': event.target.files[0].name });
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
  }


  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return 0; }
    console.log(this.form.value);
   // this.items.add(this.form.value);
    this.navCtrl.setRoot('ContentPage');
  }
}
