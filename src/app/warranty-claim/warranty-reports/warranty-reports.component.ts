import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js'

@Component({
  selector: 'app-warranty-reports',
  templateUrl: './warranty-reports.component.html',
  styleUrls: ['./warranty-reports.component.css']
})
export class WarrantyReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  a:number=1;
  select(n:number){
    this.a=n;
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: false,
    scales: {
      xAxes: [{
          stacked: true
      }],
      yAxes: [{
          stacked: true
      }]
            }
  };

    public mbarChartLabels:string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
  
    public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  
    public barChartData:any[] = [
      {data: [55, 60, 75, 82, 56, 62, 80], label: 'Company A'},
      {data: [58, 55, 60, 79, 66, 57, 90], label: 'Company B'}
    ];
  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      console.log(e);
    }
  
    public randomize():void {
      let data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100),
        (Math.random() * 100),
        Math.round(Math.random() * 100)];
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = data;
      this.barChartData = clone;
    }

    cars: any[] = [{id: 1, name: 'MODEL_YEAR-2021'}, {id: 2, name: 'MODEL_YEAR-2019'}, {id:3, name: 'MODEL_YEAR-2018'},{id:4, name: 'MODEL_YEAR-2017'}];
  selectedCars: any[] = [];
  selectedToAdd: any[] = [];
  selectedToRemove: any[] = [];

  chosenCars(cars){
    this.selectedToAdd = cars;
  }

  chosenCarsToRemove(cars) {
    this.selectedToRemove = cars;
  }

  assigne() {
    this.selectedCars = this.selectedCars.concat(this.selectedToAdd);
    this.cars = this.cars.filter(car => {
      return this.selectedCars.indexOf(car) < 0;
    });

    this.selectedToAdd = [];
  }

  unassigne() {
    this.cars = this.cars.concat(this.selectedToRemove);
    this.selectedCars = this.selectedCars.filter(selectedCar => {
      return this.cars.indexOf(selectedCar) < 0;
    });
    this.selectedToRemove = [];
  }

}
