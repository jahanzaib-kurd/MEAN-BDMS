import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';
import { AppConfig } from '../app.config';

@Injectable()
export class UsersService {
  constructor(
    private http: Http,
    private authService: AuthService,
    private config: AppConfig
  ) { }

  getUsers() {
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(config.get('serviceUrl') + 'users/', { headers: headers })
      .map(res => res.json());
  }
}
