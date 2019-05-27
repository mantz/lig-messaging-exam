import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApi } from 'src/app/backend-sdk';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  };
  submitError = '';

  constructor(private userApi: UserApi, private router: Router) { }

  ngOnInit() {
      let isAuthenticated = this.userApi.isAuthenticated();
      if(isAuthenticated) this.router.navigate(['messaging']);
  }

  changeFormError(msg = ''){
    this.submitError = msg;
  }

  validateForm() {
    this.changeFormError();
    let valid = this.credentials.username && this.credentials.password;
    if(!valid) this.submitError = "* User name and password fields are required";
    return valid;
  }

  submitForm(){
    if(!this.validateForm()) return;
    let test = this.userApi.login(this.credentials).subscribe(
      this.loginSuccess.bind(this),
      this.loginError.bind(this)
    );
  }

  loginSuccess(token){
    this.router.navigate(['messaging']);
  }

  loginError(error){
    switch(error.code) {
      case "LOGIN_FAILED":
        this.signUp();
        break;
      default:
        this.changeFormError(error.message);
    }
  }

  signUp(){
    let credentials = Object.assign({}, this.credentials);
    credentials['email'] = credentials.username+'@'+credentials.username+'.com'; // Loopback framework requires email
    this.userApi.create(credentials).subscribe(
      this.submitForm.bind(this),
      this.signUpError.bind(this)
    );
  }

  signUpError(error){
    let userExists = error.message.includes("User already exists");
    if(userExists) this.changeFormError("* Incorrect User name or password");
    else this.changeFormError(error.message);
  }

}
