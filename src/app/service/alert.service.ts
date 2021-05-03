import { Injectable } from '@angular/core';
import { Alert} from '../model/alert';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class AlertService {
private apiUrl = 'http://localhost:8080/api/alerts/';
constructor(private http: HttpClient) {
 }


 /*public findAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }*/

  public findAll(): Observable<Alert[]> {

    return this.http.get<Alert[]>(this.apiUrl).pipe(
 
      retry(1),
 
      catchError(this.handleError)
 
    );
 
  }

  deleteAlertId(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
 
    }

  handleError(error) {

    let errorMessage = '';
 
    if (error.error instanceof ErrorEvent) {
 
      // client-side error
 
      errorMessage = `Error: ${error.error.message}`;
 
    } else {
 
      // server-side error
 
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
 
    }
 
    window.alert(errorMessage);
 
    return throwError(errorMessage);
 
  }


/*createAlert(alert: Alert): Promise<Array<Alert>> {
 let empHeaders = new Headers({ 'Content-Type': 'application/json' });
 return this.http.post(this.apiUrl, JSON.stringify(alert), { headers: empHeaders })
 .toPromise()
 .then(response => response.json() as Alert[])
 .catch(this.handleError);
 }
deleteAlertId(id: number): Promise<Array<Alert>> {
 const url = `${this.apiUrl}/${id}`;
 return this.http.delete(url)
 .toPromise()
 .then(response => response.json() as Alert[])
 .catch(this.handleError);
 }
private handleError(error: any): Promise<Array<any>> {
 console.error('An error occurred', error);
 return Promise.reject(error.message || error);
 }*/

 public getVouchers(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"voucher");
 }
public getUsers(): Observable<any> {
  return this.http.get<any>(this.apiUrl+"users");
}
public export(fileName:string):Observable<Blob>{
  return this.http.get(this.apiUrl+'export/excel/'+fileName,{responseType: 'blob'})
}
public getinbox():Observable<any>{
  return this.http.get<any>(this.apiUrl+"inbox")
}

public getAlerts():Observable<any>{
  return this.http.get<any>(this.apiUrl+"data")
}

}