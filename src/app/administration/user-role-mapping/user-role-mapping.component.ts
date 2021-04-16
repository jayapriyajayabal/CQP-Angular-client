import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-role-mapping',
  templateUrl: './user-role-mapping.component.html',
  styleUrls: ['./user-role-mapping.component.css']
})
export class UserRoleMappingComponent implements OnInit {
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
