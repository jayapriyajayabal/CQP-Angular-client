import { Component, OnInit, ViewChild } from '@angular/core';
/* import { TPLItemDetailsComponent } from '../tplitem-table/tplitem-table.component'; */
import { Observable } from "rxjs";
import { TPLItemService } from "../../../service/tplitem.service";
import { TPLItem } from "../../../service/tplitem";
import { Status } from '../../../service/status';
import { Conclusion } from '../../../service/conclusion';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


export interface TPLItemElement {
  statusId: number;
  itemDetailId: number;
  sequenceNo: string;
  dueDate: string
	reopenedDate: string
	reopenedDueDate: string
  conclusionId: number;
}

const ELEMENT_DATA: TPLItemElement[] = [
];

@Component({
  selector: 'app-tplitem-table',
  templateUrl: './tplitem-table.component.html',
  styleUrls: ['./tplitem-table.component.css']
})

export class TPLItemTableComponent implements OnInit {
  tplitems: Observable<TPLItem[]>;
  displayedColumns: string[] = ['statusId', 'itemDetailId', 
  'sequenceNo', 'dueDate', 'reopenedDate', 'reopenedDueDate', 'conclusionId'];
  dataSource = new MatTableDataSource<TPLItemElement>();

  status: Observable<Status[]>;
  statues: Status[];

  conclusion: Observable<Conclusion[]>;
  conclusions: Conclusion[];


  constructor(private tplitemService: TPLItemService,
    private router: Router) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  ngOnInit() {

    this.status = this.tplitemService.getStatusList();
    this.status.subscribe(status => this.statues = status);

    this.conclusion = this.tplitemService.getConclusionList();
    this.conclusion.subscribe(conclusion => this.conclusions = conclusion);

    this.reloadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  reloadData() {
    this.tplitems = this.tplitemService.getTPLItemsList();
    this.tplitems.subscribe(results => {
        if (!results) { return };
        this.dataSource.data = results;
    });

    //this.tplitems.subscribe(data => console.log(data), error => console.log(error));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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
