

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TPLItemService {

  private detailBaseUrl = 'http://localhost:8080/cqp/api/details';

  private statusBaseUrl = 'http://localhost:8080/cqp/api/status';

  private supplierBaseUrl = 'http://localhost:8080/cqp/api/suppliers';

  private conclusionBaseUrl = 'http://localhost:8080/cqp/api/conclusion';
  
  private hondaHolidayBaseUrl = 'http://localhost:8080/cqp/api/honda-holiday';

  //private listBystatusAndConclusionBaseUrl = 'http://localhost:8080/cqp/api/details/status/10/conclusion/9'

  constructor(private http: HttpClient) { }

  getTPLItem(id: number): Observable<any> {
	 console.log('URI for Get Item By ID:' + `${this.detailBaseUrl}/${id}`);
     return this.http.get(`${this.detailBaseUrl}/${id}`);
  }

  createTPLItem(tplitem: Object): Observable<Object> {
     return this.http.post(`${this.detailBaseUrl}`, tplitem);
  }

  updateTPLItem(id: number, value: any): Observable<Object> {
     return this.http.put(`${this.detailBaseUrl}/${id}`, value);
  }

  deleteTPLItem(id: number): Observable<any> {
     return this.http.delete(`${this.detailBaseUrl}/${id}`, { responseType: 'text' });
  }

  getTPLItemsList(): Observable<any> {
     return this.http.get(`${this.detailBaseUrl}`);
  }

  getStatusList(): Observable<any> {
     return this.http.get(`${this.statusBaseUrl}`);
  }

  getConclusionList(): Observable<any> {
     return this.http.get(`${this.conclusionBaseUrl}`);
  }

   getSupplierList(): Observable<any> {
	   console.log('URI for Supplier:' + `${this.supplierBaseUrl}`);
     return this.http.get(`${this.supplierBaseUrl}`);
  }
   
   getDaysByHondaHoliday(id: number): Observable<any> {
	 console.log('Given number of days:' + id); 
	 console.log('URI for number of days:' + `${this.hondaHolidayBaseUrl}/days/${id}`);
	 return this.http.get(`${this.hondaHolidayBaseUrl}/days/${id}`);
  }

  /**
   * http://localhost:8080/cqp/api/details/status/{id}/conclusion/{id}
   * 0 == all
   */
  getTPLItemsListByStatusAndConclusion(statusId: string, conclusionId: string): Observable<any> {
    if (statusId === '0' && conclusionId === '0') {
      console.log('Status: All and Conclusion: All');
      return this.http.get(`${this.detailBaseUrl}`);
    } else if (statusId !== '0' && conclusionId === '0') {
      console.log('Status: Not All and Conclusion: All');
      return this.http.get(`${this.detailBaseUrl}/status/${statusId}`);
    } else if (statusId === '0' && conclusionId !== '0') {
      console.log('Status: All and Conclusion: Not All');
      return this.http.get(`${this.detailBaseUrl}/conclusion/${conclusionId}`);
    } else {
      console.log('Status: Not All and Conclusion: Not All');
      return this.http.get(`${this.detailBaseUrl}/status/${statusId}/conclusion/${conclusionId}`);
    }
  }

}
