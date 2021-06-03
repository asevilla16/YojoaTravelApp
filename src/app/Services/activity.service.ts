import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  API_URI= environment.apiURL;

  constructor(private http: HttpClient) { }
  getActivity(id: number){
    return this.http.get(`${this.API_URI}activity/user/${id}`);
  }
}
