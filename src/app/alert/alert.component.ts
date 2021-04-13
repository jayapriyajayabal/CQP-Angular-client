import { Component, OnInit, Input } from '@angular/core';
import { Alert } from "../model/alert";
import { AlertService } from "../service/alert.service";
import { Router } from '@angular/router';
@Component({
 selector: 'app-alert',
 templateUrl: './alert.component.html',
 styleUrls: ['./alert.component.css'],
 providers: [AlertService]
})
export class AlertComponent implements OnInit {
private alerts: Alert[];
constructor(private router: Router,
 private alertService: AlertService) { }
ngOnInit() {
 this.getAllAlerts();
 }
getAllAlerts() {

    this.alertService.findAll().subscribe(data => {
        this.alerts = data;
      });
    }
/*createAlert() {
 let supplier = (<HTMLInputElement>document.getElementById('supplier')).value;
 let status = (<HTMLInputElement>document.getElementById('status')).value;
 let alert_type = (<HTMLInputElement>document.getElementById('alert_type')).value;
 let alert = new Alert(supplier,status,alert_type);
 this.alertService.createAlert(alert).then(
 alerts => {
 this.alerts = alerts;
 },
 err => {
 console.log(err);
 }
 );
 }
deleteAlert(alert: Alert) {
 this.alertService.deleteAlertId(alert.id).then(
 alerts => {
 this.alerts = alerts;
 },
 err => {
 console.log(err);
 }
 );
 }*/
}