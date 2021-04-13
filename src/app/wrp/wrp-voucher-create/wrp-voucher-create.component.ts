import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-wrp-voucher-create',
  templateUrl: './wrp-voucher-create.component.html',
  styleUrls: ['./wrp-voucher-create.component.css']
})
export class WrpVoucherCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
    manualVoucherDataUpload(){
    this.router.navigate(['/manual-voucher-data-upload']);
  }
  

}
