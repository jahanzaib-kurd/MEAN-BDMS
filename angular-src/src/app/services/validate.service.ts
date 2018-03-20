import { Injectable } from '@angular/core';

export interface RegexPatterns {
  emailPattern:RegExp,
  usernamePattern:RegExp,
  namePattern:RegExp
  }

@Injectable()
export class ValidateService {
  constructor() { }

  //Registration Form Validation
  validateRegister(user){

    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined)
    {
      return false;
    }
    return true;
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  //Login Form Validation

  validateLogin(user){
    if(user.username == undefined || user.password == undefined)
    {
      return false;
    }
    return true;
  }
    RegExpPatterns: RegexPatterns = {
    emailPattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    usernamePattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    namePattern:/^[a-z ,.'-]+$/
  };
}
