import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateLogin(user)) {
      this.flashMessage.show('Please fill all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    if (!this.validateService.validateEmail(user.username)) {
      this.flashMessage.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    //Register User
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show('user Logged in', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['login']);
      }
    });
  }

}
