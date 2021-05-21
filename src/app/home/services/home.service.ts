import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  constructor(private httpClient: HttpClient) {}

  getActivity(): Observable<any>
  {
    return this.httpClient.get<any>(`${environment.apiURL}/activity`);
  }
}
