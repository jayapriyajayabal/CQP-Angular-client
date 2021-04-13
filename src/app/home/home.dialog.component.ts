
import { Component, AfterViewInit, ViewChildren ,OnInit} from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
//import { jsonpFactory } from '@angular/http/src/http_module';
@Component({
  selector: 'app-home',
  template: `
  <div>
  <tbody>
  <tr *ngIf ='errorResponse != null'>
  <td>
      {{errorResponse.message}}
  </td>
</tr> 
</tbody>
</div>
`,
  styleUrls: ['./home.component.css'],
  providers: [AlertService]
})
export class HomeDialogComponent implements OnInit {


  private alerts: any[];
  private alerts1: object;
  private delete =  this.deleteAlertId();
  private errorResponse : any;
  constructor(private router: Router,
   private alertService: AlertService,public dialog: MatDialog) { }

  ngOnInit() {
    this.deleteAlertId();
  }

  deleteAlertId(){
    this.alertService.deleteAlertId(130).subscribe(data => {
      this.alerts = data;
     
      }, error => {
      this.errorResponse = error.error;
      
    });

 }




}
