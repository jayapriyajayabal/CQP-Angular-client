import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './tpl-historical.component.html',
  styleUrls: ['./tpl-historical.component.css']
})
export class TplHistoricalComponent implements OnInit {
  public show: boolean = false;
  public hide: boolean = true;
  public inner: boolean = false;
  public outer: boolean = true;
  public external: boolean = false;
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
  toggleComments() {
    this.external = !this.external;
    this.inner = !this.inner;
  }
}
