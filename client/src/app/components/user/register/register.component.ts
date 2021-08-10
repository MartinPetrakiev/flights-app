import { Component } from '@angular/core';
import { UserService } from '../../../shared/user-service/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errors: string[];

  constructor(public userService: UserService, public router: Router) {
    this.errors = [];
  }

  registerUser(form: NgForm): void {
    const user = form.control.value;
    this.errors = [];
    this.userService.register(user).subscribe(
      res => {
        console.log('user registed', res);
        this.router.navigate(['/user/log-in']);
      },
      err => {
        console.log('register error', err);
        if(err.error.message === 'Validation Error!') {
          return this.errors = err.error.errors;
        } else {
          return this.errors = ['Something went wrong'];
        }
      },
    );
  }

}
