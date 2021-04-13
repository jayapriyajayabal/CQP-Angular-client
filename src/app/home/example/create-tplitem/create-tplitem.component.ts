import { TPLItemService } from '../../../service/tplitem.service';
import { TPLItem } from '../../../service/tplitem';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from "rxjs";


@Component({
  selector: 'app-create-tplitem',
  templateUrl: './create-tplitem.component.html',
  styleUrls: ['./create-tplitem.component.css']
})
export class CreateTPLItemComponent implements OnInit {
	todayNumber: number = Date.now();
	todayDate : Date = new Date();
	todayString : string = new Date().toDateString();
	todayISOString : string = new Date().toISOString();
    selectedDaysId: number;
    resultDay: string;
    
	Days: any = [
      { id: '5',  name: 'day 5' },
      { id: '10', name: 'day 10' },
      { id: '15', name: 'day 15' },
      { id: '20', name: 'day 20' },
      { id: '25', name: 'day 25' },
      { id: '30', name: 'day 30' },
      { id: '35', name: 'day 35' },
      { id: '40', name: 'day 40' }
    ];
  
  tplitem: TPLItem= new TPLItem();
  dayByHoliday: Observable<string>;
  currentDaysSelection:string;
  submitted = false;

  constructor(private tplitemService: TPLItemService,
    private router: Router) { }

  ngOnInit() { }
  
  getDays(id: number) {
	  this.tplitemService.getDaysByHondaHoliday(id)
      .subscribe(data => {
        console.log('Returned data = ' + data)
        this.resultDay = data;
      }, error => console.log(error));
  }
  
  onChange(daysValue: string) {
	 this.currentDaysSelection = daysValue;
  }

  newTPLItem(): void {
    this.submitted = false;
    this.tplitem = new TPLItem();
  }

  save() {
    this.tplitemService.createTPLItem(this.tplitem)
      .subscribe(data => console.log(data), error => console.log(error));
    this.tplitem = new TPLItem();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tplitems']);
  }
  
  getDaysByHondaHoliday(currentDaysSelection) {
	console.log('Selected days = ' + currentDaysSelection);
	this.dayByHoliday = this.tplitemService.getDaysByHondaHoliday(currentDaysSelection);
	console.log('Returned days = ' + this.dayByHoliday);
  }
  
  callDays(value) {
	    console.log('Day Id = ' + value);
	    this.selectedDaysId = value;
  }
  
}
