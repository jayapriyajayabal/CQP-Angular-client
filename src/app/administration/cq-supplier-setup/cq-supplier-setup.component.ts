import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cq-supplier-setup',
  templateUrl: './cq-supplier-setup.component.html',
  styleUrls: ['./cq-supplier-setup.component.css']
})
export class CqSupplierSetupComponent implements OnInit {

  public show: boolean = false;
  public hide: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }

}
