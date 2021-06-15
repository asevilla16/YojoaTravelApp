import { Injectable } from '@angular/core';
import { User } from '../models/profile';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {
  API_URI= environment.apiURL;

  constructor(private http: HttpClient) { }
   getUser(id: number){
     return this.http.get(`${this.API_URI}user/${id}`);
   }
   updateUser(user: User , id:number){
     return this.http.put(`${this.API_URI}user/${id}`, user);
   }
}
