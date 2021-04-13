import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../../service/status';
import { Conclusion } from '../../../service/conclusion';
import { Supplier } from '../../../service/supplier';
import { TPLItemService } from '../../../service/tplitem.service';
import { Observable } from "rxjs";
import { NgModule } from '@angular/core';
import { TPLItem } from "../../../service/tplitem";


@Component({
  selector: 'app-search-tplitem',
  templateUrl: './search-tplitem.component.html',
  styleUrls: ['./search-tplitem.component.css']
})
export class SearchTPLItemComponent implements OnInit {

  status: Observable<Status[]>;
  statues: Status[];
  selectedStatusId: number;
  selectedStatusDesc: string;
  currentStatusSelection: Status;

  conclusion: Observable<Conclusion[]>;
  conclusions: Conclusion[];
  currentConclusionSelection: Conclusion;
  selectedConclusionId: number;
  selectedConclusionDesc: string;

  supplier: Observable<Supplier[]>;
  suppliers: Supplier[];
  selectedSupplierNo: string;
  selectedSupplierName: string;
  currentSupplierSelection: Supplier;

  tplitems: Observable<TPLItem[]>;

  constructor(private tplitemService: TPLItemService,
    private router: Router) { }

  ngOnInit() {
    this.status = this.tplitemService.getStatusList();
    this.status.subscribe(status => this.statues = status);

    this.conclusion = this.tplitemService.getConclusionList();
    this.conclusion.subscribe(conclusion => this.conclusions = conclusion);

    this.supplier = this.tplitemService.getSupplierList();
    this.supplier.subscribe(supplier => this.suppliers = supplier);
  }
  onChange(statusValue: Status, conclusionValue: Conclusion, supplierValue: Supplier) {
    this.currentStatusSelection = statusValue;
    this.currentConclusionSelection = conclusionValue;
    this.currentSupplierSelection = supplierValue;
  }

  getTPLItemsListByStatusAndConclusion(currentStatusSelection, currentConclusionSelection, currentSupplierSelection) {
    console.log('Selected status Id = ' + currentStatusSelection);
    console.log('Selected conclusion Id = ' + currentConclusionSelection);
    console.log('Selected supplier no Id = ' + currentSupplierSelection);
    this.tplitems = this.tplitemService.getTPLItemsListByStatusAndConclusion(currentStatusSelection, currentConclusionSelection);
  }

  findBySpecField(data, reqField, value, resField) {
    const container = data;
    for (var i = 0; i < container.length; i++) {
      if (container[i][reqField] == value) {
        return (container[i][resField]);
      }
    }
    return '';
  }

  callSupplier(value) {
    console.log('Supplier No. = ' + value);
    this.selectedSupplierNo = value;
  }

  callStatus(value) {
    console.log('Status Id = ' + value);
    this.selectedStatusId = value;
  }

  callConcluision(value) {
    console.log('Conclusion Id = ' + value);
    this.selectedConclusionId = value;
  }

}
