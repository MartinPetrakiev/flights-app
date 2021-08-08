import { Inject, Injectable  } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user.model';
import { LocalStorage } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(
  //   private cookieService: CookieService
  // ) { }

  // public isAuthenticated(): boolean {
  //   const jwtHelper = new JwtHelperService();
  //   const token = this.cookieService.get('auth-cookie');           
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !jwtHelper.isTokenExpired(token);
  // }

  // user: IUser | undefined;

  // get isLogged(): boolean {
  //   return !!this.user;
  // }
  user: User | undefined;

  get isAuthenticated(): boolean {
    return !!this.user;
  }

  constructor(@Inject(LocalStorage) private localStorage: Window['localStorage']) {
    try {
      const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
      this.user = JSON.parse(localStorageUser);
    } catch {
      this.user = undefined;
    }
  }

  login(email: string, username: string): void {
    this.user = {
      email,
      username
    }

    this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    this.localStorage.removeItem('<USER>');
  }
}
