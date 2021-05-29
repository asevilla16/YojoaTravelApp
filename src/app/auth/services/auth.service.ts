import { UserLogin, User } from './../models/user';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = environment.apiURL;

  loginUrl = 'login';
  registerUrl = 'register';

  loggedUser: BehaviorSubject<any> = new BehaviorSubject({});
  loggedUser$ = this.loggedUser.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(user: UserLogin) {
    return this.http.post(this.apiURL + this.loginUrl, {
      userName: user.userName,
      password: user.password,
    });
  }

  isLogged() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }

  signUp(user) {
    return this.http.post(this.apiURL + this.registerUrl, user);
  }
}
