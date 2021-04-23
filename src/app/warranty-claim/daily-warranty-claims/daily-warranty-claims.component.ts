import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-warranty-claims',
  templateUrl: './daily-warranty-claims.component.html',
  styleUrls: ['./daily-warranty-claims.component.css']
})
export class DailyWarrantyClaimsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 
  items: any[] = [{id: 1, name: 'model1'}, {id: 2, name: 'model2'}, {id:3, name: 'model3'}];
  selectedItems: any[] = [];
  selectedToAdd: any[] = [];
  selectedToRemove: any[] = [];

  chosenItems(items){
    this.selectedToAdd = items;
  }

  chosenItemsToRemove(items) {
    this.selectedToRemove = items;
  }

  assigne() {
    this.selectedItems = this.selectedItems.concat(this.selectedToAdd);
    this.items = this.items.filter(item => {
      return this.selectedItems.indexOf(item) < 0;
    });

    this.selectedToAdd = [];
  }

  unassigne() {
    this.items = this.items.concat(this.selectedToRemove);
    this.selectedItems = this.selectedItems.filter(item => {
      return this.items.indexOf(item) < 0;
    });
    this.selectedToRemove = [];
  }

}
