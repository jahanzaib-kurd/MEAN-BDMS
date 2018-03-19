import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UsersService } from '../../services/users.service';
import { Router } from "@angular/router";
import { SnackbarService } from '../../services/snackbar.service';
import { FormControl, FormGroupDirective, NgForm, Validators, PatternValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  emailPattern: RegExp;

  constructor(
    private validateService: ValidateService,
    private snackBar: SnackbarService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,20})$/;
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.snackBar.showMessage('Please fill all fields');
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.snackBar.showMessage('Please enter valid email');
      return false;
    }

    //Register User
    this.usersService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.snackBar.showMessage('user has been registered');
        this.router.navigate(['/login']);
      }
      else {
        this.snackBar.showMessage('User registeration failed');
        this.router.navigate(['/register']);
      }
    });
  }

}
