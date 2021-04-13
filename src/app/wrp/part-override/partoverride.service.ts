import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartOverrideService {

  private detailBaseUrl = 'http://localhost:8080/cqp/api/partoverride';

  constructor(private http: HttpClient) { }

  getPartOverrideList(): Observable<any> {
     return this.http.get(`${this.detailBaseUrl}`);
  }
}
