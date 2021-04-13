
import { TPLItemDetailsComponent } from '../tplitem-details/tplitem-details.component';
import { Observable } from "rxjs";
import { TPLItemService } from "../../../service/tplitem.service";
import { TPLItem} from "../../../service/tplitem";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';

@Component({
  selector: "app-tplitem-list",
  templateUrl: "./tplitem-list.component.html",
  styleUrls: ["./tplitem-list.component.css"]
})
export class TPLItemListComponent implements OnInit {
  tplitems: Observable<TPLItem[]>;

  constructor(private tplitemService: TPLItemService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tplitems= this.tplitemService.getTPLItemsList();
  }

  deleteTPLItem(id: number) {
    this.tplitemService.deleteTPLItem(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  tplitemDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateTPLItem(id: number){
    this.router.navigate(['update', id]);
  }

  findBySpecField(data, reqField, value, resField) {
    var container = data;
    for (var i = 0; i < container.length; i++) {
      if (container[i][reqField] == value) {
        return (container[i][resField]);
      }
    }
    return '';
  }

}

