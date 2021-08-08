import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../../../models/user.model'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errors: string[] | string;

  constructor(public userService: UserService, public router: Router) {
    this.errors = '';
  }

  registerUser(form: NgForm): void {
    const user = form.control.value;
    this.errors = '';
    this.userService.register(user).subscribe(
      res => {
        console.log('user registed', res);
        this.router.navigate(['/user/log-in']);
      },
      err => this.errors = err.error.message,
    );
  }

}
