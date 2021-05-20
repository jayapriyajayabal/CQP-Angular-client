import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class WarrantyReportService {
private apiUrl = 'http://localhost:8080/api/warrantyReport/valuesBySupplier/';
constructor(private http: HttpClient) {
 }


  

 public getWarrantyreport(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
 }

}