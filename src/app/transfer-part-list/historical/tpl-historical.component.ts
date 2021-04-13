import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './tpl-historical.component.html',
  styleUrls: ['./tpl-historical.component.css']
})
export class TplHistoricalComponent implements OnInit {
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
