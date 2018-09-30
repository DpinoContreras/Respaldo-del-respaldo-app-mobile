import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ViewController, ToastController} from 'ionic-angular';
import { CourseService ,DocumentService } from '../../providers';
import { TypeService} from '../../providers';
/**
 * Generated class for the UploadFilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-files',
  templateUrl: 'upload-files.html',
})
export class UploadFilesPage {
  @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;
  Items:any;
  item: any;
  courses:any;
  tipos:any;
  form: FormGroup;
    constructor(public navCtrl: NavController, public viewCtrl: ViewController,
       formBuilder: FormBuilder,
       public toastCtrl: ToastController,
       public types: TypeService,
       public course: CourseService,
       public doc: DocumentService) {
      this.course.getCourse().subscribe((course:any) => {this.courses = course.data;});
      this.types.get().subscribe((types:any) => {this.tipos = types;});
    this.form = formBuilder.group({ 
      base64: [''],
      nombre_archivo: ['',Validators.required],
      ruta: ['',Validators.required],
      owner_fk: ['', Validators.required],
      type_fk: ['', Validators.required],
      course_fk: ['', Validators.required]
    });
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  getPicture() {
      this.fileInput.nativeElement.click();
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
    let imageData = (readerEvent.target as any).result;
    let base = imageData.split(",");      
    this.form.patchValue({ base64: base[1] }); };
    this.form.patchValue({ 'ruta': event.target.files[0].name });
    this.form.patchValue({ 'owner_fk': parseInt(sessionStorage.getItem("pk")) });
    reader.readAsDataURL(event.target.files[0]);
    console.log(event.target.files[0]);
  }
  done() {
    if (!this.form.valid){ return 0; }
    console.log(this.form.value);
    
    this.doc.addDocument(this.form.value).subscribe(
      (res:any)=>{
        let toast = this.toastCtrl.create({
          message: 'Archivo subido con exito',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    );
   // this.items.add(this.form.value);
    this.navCtrl.setRoot('ContentPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFilesPage');
  }

}
