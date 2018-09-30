import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ContactService {
private contactUrl = 'http://165.227.26.162:10010/api/contact';
  constructor(public http: HttpClient) {}

  send(contact: Contact): Observable<Contact[]>{
   return this.http.post<Contact[]>(this.contactUrl, contact, httpOptions);
  }
}
