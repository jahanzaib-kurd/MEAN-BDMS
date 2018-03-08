import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { UsersService } from '../../services/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";

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

  constructor(
     private validateService: ValidateService,
     private flashMessage: FlashMessagesService,
     private usersService: UsersService,
     private router: Router
    ) { }

  ngOnInit() {
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
      this.flashMessage.show('Please fill all fields',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please enter valid email',{cssClass:'alert-danger',timeout:3000});
      return false;
    }

    //Register User
    this.usersService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show('user has been registered',{cssClass:'alert-success',timeout:3000});
        this.router.navigate(['/login']);
      }
      else{
        this.flashMessage.show('User registeration failed',{cssClass:'alert-danger',timeout:3000});
        this.router.navigate(['/register']);
      }
    });
  }

}
