import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/auth/auth.service';

const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, public authService: AuthService) { }

  register(user: User): Observable<any> {
    return this.http.post(`${API_URL}register`, user, { withCredentials: true })
  }

  login(user: User): Observable<any> {
    return this.http.post(`${API_URL}login`, user, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post(`${API_URL}logout`, {}, { withCredentials: true });
  }

}
