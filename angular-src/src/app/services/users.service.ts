import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { AppConfig } from '../app.config';

@Injectable()
export class UsersService {
  serviceUrl: String;
  constructor(
    private http: Http,
    private authService: AuthService,
    private config: AppConfig
  ) {
    this.serviceUrl = (config.isProd ? config.prodServiceUrl:config.devServiceUrl);
  }
  
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'users/authenticate', user, { headers: headers })
      .map(res => res.json());
  }

  getUsers() {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'users/', { headers: headers })
      .map(res => res.json());
  }

  getUserProfile() {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.serviceUrl + 'users/profile', { headers: headers })
      .map(res => res.json());
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.serviceUrl + 'users/register', user, { headers: headers })
      .map(res => res.json());
  }

}
