import { Api } from '../api/api';
import { Injectable } from '@angular/core';

import { DocumentType } from '../../models/DocumentType';

@Injectable()
export class TypeService {

  constructor(public api: Api) { }
  get() {
    return this.api.get('doc_type/getAll');
  }
  getById(id){
    let url = 'doc_type/'+id;
    return this.api.get(url);
  }
  addDocType(Type: DocumentType){
    let url='doc_type';
    return this.api.post(url,Type);
  }
  putDocType(Type: DocumentType){
    let url='doc_type'+Type.pk;
    return this.api.post(url,Type);
  }
  deleteDocType(Type: DocumentType){
    let url='doc_type'+Type.pk;
    return this.api.delete(url);
  }

}
