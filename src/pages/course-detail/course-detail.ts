import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { DocumentService } from '../../providers';


@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html'
})
export class CourseDetailPage {
  course: any;
  Documentos:any;
  error:any;
  constructor(public navCtrl: NavController,
    private base64ToGallery: Base64ToGallery, navParams: NavParams, 
    public document: DocumentService ) {
    this.course = navParams.get('course');
    this.document.getByCourse(this.course.pk).subscribe(
      (res:any)=>{
        if (res.data.length==0) {
          this.error="Aun no hay Documentos en este curso";        
        } else {
          this.Documentos=res.data;
          console.log(res.data);
                    
        }
      }
    );
    // || courses.defaultItem;
  } 
  openItem(code) {
    this.document.getByCode(code).subscribe(
      (res:any) =>{
        const linkSource = 'data:application/pdf;base64,'+ res.document;
        window.open(linkSource, '_system', 'location=yes');                
      }
    );
    
}
}
