import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IActivity} from '../activities/models/activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities() {
    return this.http.get<IActivity[]>(`${ environment.apiURL + environment.activityprefix }`);
  }

}
