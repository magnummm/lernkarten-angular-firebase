import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  showLogin=true;

  constructor( private location: Location, private authService: AuthService){}
  

  cancel(){
    this.location.back()
  }

  registerUser(registerData: any) {
   this.authService.registerUser(registerData)    
  }
  signInUser(signInData: any) {
    this.authService.signInUser(signInData)
  };

 

  
} 

