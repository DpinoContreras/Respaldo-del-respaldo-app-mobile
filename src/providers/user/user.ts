import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _name: any;
  _email:any;
  _pk:any;
  _token:any;
  _img:any;
  _user:any;

  constructor(public api: Api, private storage: Storage) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo);
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  auth(token:any) {
    let seq = this.api.post('auth', token);
    seq.subscribe((res:any) =>{
      this._pk=res.data.pk;
      this._email=res.data.email;
      this._token=res.token;
      this._img=res.data.img;
      this._name=res.data.name;
      sessionStorage.setItem("pk",res.data.pk);
      sessionStorage.setItem("email",res.data.email);
      sessionStorage.setItem("img",res.data.img);
      sessionStorage.setItem("name",res.data.name);
      sessionStorage.setItem("role",res.data.role);
      sessionStorage.setItem("token",res.token);
  }, err => {
    console.error('ERROR', err);
  }
    );
    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
    sessionStorage.clear();

  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
