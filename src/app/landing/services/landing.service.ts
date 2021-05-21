import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private httpClient: HttpClient) {}

  getActivity(): Observable<any>
  {
    return this.httpClient.get<any>(`${environment.apiURL}/activity`);
  }
}
