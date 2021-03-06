import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  constructor(private http: Http) { }

  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logOut(){
    this.authToken= null;
    this.user =null;
    localStorage.clear();
  }

  getLoginUsername()
  {
    let loginUser = JSON.parse(localStorage.getItem('user'));
    return (loginUser.username);
  }
}
