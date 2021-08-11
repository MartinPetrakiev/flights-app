import { Component } from '@angular/core';
import { UserService } from '../../../shared/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validation, emailValidator } from 'src/app/shared/validators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  errors: string[] = [];

  killSubscription = new Subject();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      repeatPassword: ['', [Validators.required]]
    },
      {
        validators: [Validation.match('password', 'repeatPassword')]
      }
    );
  }

  registerUser(): void {
    const user = this.form.value;
    this.errors = [];
    this.userService.register(user).subscribe(
      res => {
        console.log('user registed', res);
        this.router.navigate(['/user/log-in']);
      },
      err => {
        console.log('register error', err);
        if (err.error.message === 'Validation Error!') {
          return this.errors = err.error.errors;
        } else {
          return this.errors = ['Something went wrong'];
        }
      },
    );
  }

}
