import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-wrp-summary-edit',
  templateUrl: './wrp-summary-edit.component.html',
  styleUrls: ['./wrp-summary-edit.component.css']
})
export class WrpSummaryEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  
  assignMTC(){
    this.router.navigate(['/assign-mtc']);
  }
  
   setCriteria(){
    this.router.navigate(['/set-criteria']);
  }
  
   addUpdateImages(){
    this.router.navigate(['/add-update-images']);
  }
  

}
