import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsStatusService {

  constructor(private http: HttpClient) {}

  public getFlightsStatus(): Observable<any> {
    // TODO: use real backend API
    return this.http.get('./assets/mocks/AMS-KBP-2019-06-12.json');
  }
}
