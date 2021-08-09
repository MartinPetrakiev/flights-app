import { Inject, Injectable  } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LocalStorage } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
