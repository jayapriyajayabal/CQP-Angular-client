import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cq-supplier-setup',
  templateUrl: './cq-supplier-setup.component.html',
  styleUrls: ['./cq-supplier-setup.component.css']
})
export class CqSupplierSetupComponent implements OnInit {

  public show:boolean = false;
  public Search:any = 'Show';
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.Search = "Hide";
    else
      this.Search = "Show";
  }

}
