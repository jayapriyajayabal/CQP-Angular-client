import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Observable } from "rxjs";
import { PartOverrideService } from "./partoverride.service";
import { Partoverride } from "./partoverride";
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';


export interface PartOverrideElement {
    namePlate: string;
	shortPart: string;
	dayOfService: number;
	odmMI: number;
	odomKM: number;
	includeCamp: string;
}

export interface Brand {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PartOverrideElement[] = [
];

@Component({
  selector: 'app-part-override',
  templateUrl: './part-override.component.html',
  styleUrls: ['./part-override.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PartOverrideComponent implements OnInit {

  newoverrideForm;
  
   overrideForm: FormGroup;

  partoverrides: Observable<Partoverride[]>;
  displayedColumns: string[] = ['namePlate', 'shortPart', 
  'dayOfService', 'odmMI', 'odomKM', 'includeCamp'];
  
  brands: Brand[] = [
    { value: 'Acura', viewValue: 'Acura' },
    { value: 'Honda', viewValue: 'Honda' },
  ];
  
  
  dataSource = new MatTableDataSource<PartOverrideElement>();

  constructor(private partoverride: PartOverrideService,
    private router: Router, private fg : FormBuilder) {
    
  }
  
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  
  @ViewChild(FormGroupDirective, { static: true }) myForm;
  

  ngOnInit() {
  
    
    //this.overrideForm = this.fg.group({
	//  'brandName': [null, Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9\\-_]*$'), Validators.maxLength(10)])],
	//  'shortPart': [null, Validators.compose([Validators.required, Validators.pattern('^-?(0|[1-9]\d*)?$'), Validators.maxLength(10)])],
	//  'dayOfServ': [null, Validators.compose([Validators.required, Validators.pattern('^-?(0|[1-9]\d*)?$'), Validators.maxLength(30)])],
	//  'odomMI': [null, Validators.compose([Validators.required, Validators.pattern('^-?(0|[1-9]\d*)?$'), Validators.maxLength(30)])], 
	//  'odomKM': [null, Validators.compose([Validators.required, Validators.pattern('/^[0-9]\d*$/'), Validators.maxLength(30)])],
	//  }); 
	  
	this.overrideForm = this.fg.group({
	  'shortPart': [null, Validators.required],
	  'dayOfServ': [null, Validators.required],
	  'odomMI': [null, Validators.required],
	  'odomKM': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(30)])]
	  });   

    this.reloadData();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  public resetForm() {
    /* this.overrideForm.reset();
    this.overridepForm.clearValidators(); */
    this.myForm.resetForm();
  }

  reloadData() {
    this.partoverrides = this.partoverride.getPartOverrideList();
    this.partoverrides.subscribe(results => {
        if (!results) { return };
        this.dataSource.data = results;
    });

    //this.tplitems.subscribe(data => console.log(data), error => console.log(error));
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

}

