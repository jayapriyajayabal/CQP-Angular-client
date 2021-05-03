import { Component, AfterViewInit, ViewChildren, OnInit } from '@angular/core';
import { Alert } from '../model/alert';
import { AlertService } from '../service/alert.service';
import { HomeDialogComponent } from './home.dialog.component';
import { MatDialog } from '@angular/material/dialog';
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

  private errorResponse: any;
  constructor(private router: Router, private alertService: AlertService, public dialog: MatDialog, private DownloadService: DownloadService) { }
  private inbox: any;
  public vouchers = new Array();
  public users: any;
  public callIn = new Array();
  public tpl = new Array();
  public tplDue = new Array();
  public user = new Array();
  public data: any;
  ngOnInit() {
    this.getinbox();
    // this.getAlerts();
  }
  export(fileName: string) {
    this.alertService.export(fileName).subscribe(
      blob => saveAs(blob, fileName + "-Sheet.xlsx")
    )
  }
  getinbox() {
    this.alertService.getinbox().subscribe(data => {
      this.inbox = data;
    })
  }
  getAlerts() {
    this.alertService.getAlerts().subscribe(
      data => {
        for (var d of data) {
          if (d.itemType == "Call-In") { this.callIn.push(d); }
          else if (d.itemType == "TPL") { this.tpl.push(d); }
          else if (d.itemType == "TPL-DUE") { this.tplDue.push(d); }
          else if (d.itemType == "User") { this.user.push(d); }
          else if (d.itemType == "Voucher") { this.vouchers.push(d); }

        }
      }

    )
  }
}
