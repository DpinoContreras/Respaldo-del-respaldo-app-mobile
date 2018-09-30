import { Injectable } from '@angular/core';
import { Api } from '../api/api';

@Injectable()
  export class DocumentService {

   constructor(private api: Api) { }

    get() {
        return this.api.get('document/getAll');
      }
    getbyId(id){
      let url = 'document/'+id;
      return this.api.get(url);
    }
    getByCode(Code){
      let url = 'document/getByCode/'+Code;
      return this.api.get(url);
    }
    getByType(Type){
      let url = 'document/getByType/'+Type;
      return this.api.get(url);
    }
    getByOwner(Owner){
      let url = 'document/getByOwner/'+Owner;
      return this.api.get(url);
    }
    getByCourse(Course){
      let url = 'document/getByCourse/'+Course;
      return this.api.get(url);
    }
    addDocument(Documento:any) {    
      let url = 'document?token=' + sessionStorage.getItem('token');       
      return this.api.post(url,Documento);
    }
    putDocument(Document:any) {
      let url = 'document/'+ Document.pk;
      return this.api.put(url, Document);
    }
    deleteDocument(DocumentId) {
      let url = 'document/'+ DocumentId;
      return this.api.delete(url);
    }
  }
