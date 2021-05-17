import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit {
  public show: boolean = false;
  public inner: boolean = false;
  public outer: boolean = true;
  public hide: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }
  toggle1() {
    this.inner = !this.inner;
    this.outer = !this.outer;
  }
}
