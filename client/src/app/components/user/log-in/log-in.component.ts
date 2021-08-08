import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthService } from '../../../auth/auth.service'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  errors: string[] | string;

  constructor(private userService: UserService, public router: Router, private authService: AuthService) {
    this.errors = '';
  }

  loginUser(form: NgForm): void {
    const user = form.control.value;
    this.errors = '';
    this.userService.login(user).subscribe(
      res => {
        console.log('user logged-in', res);
        this.authService.login(res.email, res.username)
        this.router.navigate(['/admin/create']);
      },
      err => this.errors = err.error.message,
    );
  }

}
