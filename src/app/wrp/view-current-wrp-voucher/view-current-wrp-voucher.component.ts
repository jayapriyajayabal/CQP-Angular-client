import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-view-current-wrp-voucher',
  templateUrl: './view-current-wrp-voucher.component.html',
  styleUrls: ['./view-current-wrp-voucher.component.css']
})
export class ViewCurrentWrpVoucherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToVoucherDetail(){
    this.router.navigate(['/wrp-voucher-detail']);
  }

}
