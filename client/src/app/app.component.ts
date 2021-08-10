import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { UserService } from './shared/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightsApp';
  constructor(
    public authService: AuthService, 
    public userService: UserService,
    public router: Router
    ) {

  }

  logout() {
    this.userService.logout();
    this.authService.logout();
    this.router.navigate(['flights']);
    console.log('user logged out');
  }
}
