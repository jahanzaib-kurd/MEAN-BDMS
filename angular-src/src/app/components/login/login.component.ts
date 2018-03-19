import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from "@angular/router";
import { FormControl, FormGroupDirective, NgForm, Validators, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  usernamePattern: RegExp;
  password: String;
  constructor(
    private validateService: ValidateService,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    private snackBar: SnackbarService
  ) {
    this.usernamePattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,20})$/;
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    // Required Fields
    if (!this.validateService.validateLogin(user)) {
      this.snackBar.showMessage('Please fill all fields');
      return false;
    }

    if (!this.validateService.validateEmail(user.username)) {
      this.snackBar.showMessage('Please enter valid email');
      return false;
    }

    //Register User
    this.usersService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.snackBar.showMessage('user Logged in');
        this.router.navigate(['/dashboard']);
      }
      else {
        this.snackBar.showMessage(data.msg);
        this.router.navigate(['login']);
      }
    });
  }

}
