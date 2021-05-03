import { Component, AfterViewInit, ViewChildren ,OnInit} from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { HomeDialogComponent } from './home.dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
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


  private inbox: any[];
  private alerts1: object;
  private errorResponse : any;
  constructor(private router: Router,
   private alertService: AlertService,
   public dialog: MatDialog,
   private DownloadService: DownloadService) { }
   public vouchers:any;
   public users:any;

  ngOnInit() {
    // this.getVouchers();
    // this.getUsers();
    this.getinbox();
  }

  downloadFile(fileName : String): void {
    this.DownloadService
      .download(fileName)
      .subscribe(blob => saveAs(blob, "voucher-sheet.xlsx"));
  }

  openDialog() {
    const dialogRef = this.dialog.open(HomeDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
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

    getUsers(){
      this.alertService.getUsers().subscribe(data=>{
       this.users=data;
       console.log(data);
      }, error => {
        this.errorResponse = error.error;
      });
    }

    exportTpl(){
      this.alertService.exportTpl().subscribe()
    }
    exportCall(){
      this.alertService.exportCallin().subscribe()
    }
    exportVoucher(){
      this.alertService.exportVoucher().subscribe()
    }
    exportVoucherCost(){
      this.alertService.exportVoucherCost().subscribe()
    }
    exportUser(){
      this.alertService.exportUser().subscribe()
    }
    getinbox(){
      this.alertService.getinbox().subscribe(data=>{
        this.inbox = data;
        alert(this.inbox)
      })
    }
}
