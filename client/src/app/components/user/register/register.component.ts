import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  username: string;
  password: string;
  rePassword: string;
  
  constructor() { 
    this.email = '';
    this.username = '';
    this.password = '';
    this.rePassword = '';
  }


}
