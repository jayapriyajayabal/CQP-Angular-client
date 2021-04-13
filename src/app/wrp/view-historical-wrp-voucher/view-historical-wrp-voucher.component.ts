import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-view-historical-wrp-voucher',
  templateUrl: './view-historical-wrp-voucher.component.html',
  styleUrls: ['./view-historical-wrp-voucher.component.css']
})
export class ViewHistoricalWrpVoucherComponent implements OnInit {

 constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToVoucherDetail(){
    this.router.navigate(['/wrp-voucher-detail']);
  }

}
