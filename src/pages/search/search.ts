import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseService } from '../../providers';
import { Course } from '../../models/course';

@IonicPage({
  name:'SearchPage'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  items:Course[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public course: CourseService) { 
    this.course.getCourse().subscribe((course:any) => {
      this.items = course.data;
    });
  }
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    let params = { name: val }; 
    this.currentItems = this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toString().toLowerCase().indexOf(params[key].toString().toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(course:Course) {
    this.navCtrl.push('CourseDetailPage',{
      course: course
    });
  }

}
