import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
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
