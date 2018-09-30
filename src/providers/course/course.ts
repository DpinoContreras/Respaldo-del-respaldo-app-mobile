import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import { Api } from '../api/api';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
  export class CourseService {

    constructor(private api: Api) {}

    getCourse(){
      const url = 'course/getAll';
      return this.api.get(url);
    }
    getById(id){
      let url = 'course/'+id;
      return this.api.get(url);
    }
    addCourse(Course){
      let url='course';
      return this.api.post(url,Course,httpOptions);
    }
    putCourse(Course:any){
      let url='course'+Course.pk;
      return this.api.put(url,Course,httpOptions);
    }
    deleteCourse(CourseId){
      let url='course/'+CourseId;
      return this.api.delete(url);
    }  

  }
