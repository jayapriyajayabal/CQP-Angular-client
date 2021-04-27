import { Component, AfterViewInit, ViewChildren ,OnInit} from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { HomeDialogComponent } from './home.dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { DownloadService } from "../service/download.service";
import { saveAs } from 'file-saver';

//import { jsonpFactory } from '@angular/http/src/http_module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AlertService]
})
export class HomeComponent implements OnInit {


  private alerts: any[];
  private alerts1: object;
  private delete =  this.deleteAlertId();
  private errorResponse : any;
  constructor(private router: Router,
   private alertService: AlertService,
   public dialog: MatDialog,
   private DownloadService: DownloadService) { }
   private vouchers:any;

  ngOnInit() {
    this.getAllAlerts();
    this.deleteAlertId();
    this.getVouchers();
  }

  downloadFile(): void {
    this.DownloadService
      .download()
      .subscribe(blob => saveAs(blob, "voucher-sheet.xlsx"));
  }

  exportexcel(sheetName, tableName): void 
    {
       /* table id is passed over here */   
       console.log(tableName);
       let element = document.getElementById(tableName); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, sheetName);
 
       /* save to file */
       XLSX.writeFile(wb, sheetName + '.xlsx');
      
    }
  deleteAlertId(){
    this.alertService.deleteAlertId(130).subscribe(data => {
      this.alerts = data;
      console.log("json data"+JSON.stringify(data))
      console.log("alert data"+this.alerts);
      }, error => {
      this.errorResponse = error.error;
    });

  
    

  }
  openDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllAlerts() {

        this.alertService.findAll().subscribe(data => {
        this.alerts = data;
       
        }, error => {
        this.errorResponse = error.error;
      });
     
    }

    getVouchers(){
      this.alertService.getVouchers().subscribe(data=>{
       this.vouchers=data;
       console.log(data);
      }, error => {
        this.errorResponse = error.error;
      });
    }

}
