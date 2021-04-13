import { Component, Directive, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDatepicker} from '@angular/material/datepicker';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

/////////////////  Month and Year date picker ///////////
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/

export const MONTH_YEAR_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const CHOOSE_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM DD YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM DD YYYY',
  },
};

@Directive({
  selector: '[dateFormatYearMonth]',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MONTH_YEAR_FORMATS},
  ],
})

export class CustomDateFormatMonthYear {
}


////////////////////////////////////////////////////////

export interface Transaction {
  item: string;
  cost: number;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const BOTH_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const HEADER_ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

interface Model {
  value: string;
  viewValue: string;
}

export interface DialogData {
  animal: string;
  name: string;
}

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-proposed-ux',
  templateUrl: './proposed-ux.component.html',
  styleUrls: ['./proposed-ux.component.css'],
  
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue:  MONTH_YEAR_FORMATS},
  ],
  
  
})


export class ProposedUxComponent implements OnInit {

   openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

   //////////////  dropdown list filtering ///////////////
   public source: Array<{ text: string, value: number }> = [
        { text: "Honda Civic", value: 1 },
        { text: "MB GLE", value: 2 },
        { text: "Toyota truck", value: 3 },
        { text: "Honda Civic", value: 4 },
        { text: "MB GLS", value: 5 },
        { text: "Toyota Sedan", value: 6 },
        { text: "Honda Accord", value: 7 },
        { text: "MB GL", value: 8 },
        { text: "Toyota SUV", value: 9 },
        { text: "Honda Pilot", value: 10 },
        { text: "MB GLS 350", value: 11 },
        { text: "Toyota Motor", value: 12 },
        { text: "Nissan SUV", value: 13 },
        { text: "VW Sedan", value: 14 },
        { text: "Honda truck", value: 15 }
    ];
    
    public data: Array<{ text: string, value: number }>;
    
    //handleFilter(value) {
       // this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    //}
    
    ////////////////////////////////////////////

	  headerDisplayedColumns = ['position', 'name', 'weight', 'symbol'];
	  headerDataSource = HEADER_ELEMENT_DATA;
	  
	  bothStickyDisplayedColumns: string[] = ['item', 'cost']; 
	  bothStickyDataSource = BOTH_ELEMENT_DATA;
  
  
	  footerDisplayedColumns: string[] = ['item', 'cost'];
	  transactions: Transaction[] = [
	    {item: 'Beach ball 1', cost: 4},
	    {item: 'Towel 1', cost: 5},
	    {item: 'Frisbee 1', cost: 2},
	    {item: 'Sunscreen 2', cost: 4},
	    {item: 'Cooler 1', cost: 25},
	    {item: 'Swim suit 2', cost: 15},
	    {item: 'Beach ball', cost: 4},
	    {item: 'Towel', cost: 5},
	    {item: 'Frisbee', cost: 2},
	    {item: 'Sunscreen', cost: 4},
	    {item: 'Cooler', cost: 25},
	    {item: 'Swim suit', cost: 15},
	  ];

	  /** Gets the total cost of all transactions. */
	  getTotalCost() {
	    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
	  }
	
	  selectDisplayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
	  selectDataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
	  selection = new SelectionModel<PeriodicElement>(true, []);
	
	  /** Whether the number of selected elements matches the total number of rows. */
	  isAllSelected() {
	    const numSelected = this.selection.selected.length;
	    const numRows = this.selectDataSource.data.length;
	    return numSelected === numRows;
	  }

	  /** Selects all rows if they are not all selected; otherwise clear selection. */
	  masterToggle() {
	    this.isAllSelected() ?
	        this.selection.clear() :
	        this.selectDataSource.data.forEach(row => this.selection.select(row));
	  }

	  /** The label for the checkbox on the passed row */
	  checkboxLabel(row?: PeriodicElement): string {
	    if (!row) {
	      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
	    }
	    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
	  }

	  checked = false;
	  indeterminate = false;
	  labelPosition: 'before' | 'after' = 'after';
	  disabled = false;
	  
	  models: Model[] = [
	    {value: 'honda-0', viewValue: 'Pilot'},
	    {value: 'honda-1', viewValue: 'Civic'},
	    {value: 'honda-2', viewValue: 'Accord'},
	    {value: 'honda-3', viewValue: 'Acura'}
	  ];
  
	  startDate = new Date(1990, 0, 1);
	  date = new FormControl(moment());
	  
	  panelOpenState = false;
	  
	  animal: string;
	  name: string;
	  
	  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
	  dataSource: MatTableDataSource<UserData>;
	
	  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	  @ViewChild(MatSort, {static: true}) sort: MatSort;
	  


	  constructor(public dialog: MatDialog) {
	   
	   this.data = this.source.slice();
	  
	  // Create 200 users
	    const users = Array.from({length: 200}, (_, k) => createNewUser(k + 1));
	
	    // Assign the data to the data source for the table to render
	    this.dataSource = new MatTableDataSource(users);
	  
	  }
  
	  ngOnInit() {
	  	this.dataSource.paginator = this.paginator;
	    this.dataSource.sort = this.sort;
	  }
	  
	  applyFilter(event: Event) {
	    const filterValue = (event.target as HTMLInputElement).value;
	    this.dataSource.filter = filterValue.trim().toLowerCase();
	
	    if (this.dataSource.paginator) {
	      this.dataSource.paginator.firstPage();
	    }
	  }
  
  
	  chosenYearHandler(normalizedYear: Moment) {
	    const ctrlValue = this.date.value;
	    ctrlValue.year(normalizedYear.year());
	    this.date.setValue(ctrlValue);
	  }
	
	  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
	    const ctrlValue = this.date.value;
	    ctrlValue.month(normalizedMonth.month());
	    this.date.setValue(ctrlValue);
	    datepicker.close();
	  }
  
	  	handleFilter(value) {
	        this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
	    }

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

//////////////////////  Multi date format /////////////////////

export const DATE_FORMAT_1 = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

export const DATE_FORMAT_2 = {
  parse: {
    dateInput: 'YYYY.MM.DD',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Directive({
  selector: '[dateFormat1]',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_1},
  ],
})


export class CustomDateFormat1 {
}

@Directive({
  selector: '[dateFormat2]',
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT_2},
  ],
})
export class CustomDateFormat2 {
}

