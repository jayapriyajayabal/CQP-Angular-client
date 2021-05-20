import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { WarrantyReportService } from '../../service/warrantyReport.service';
import { Label } from 'ng2-charts'; 
@Component({
  selector: 'app-warranty-reports',
  templateUrl: './warranty-reports.component.html',
  styleUrls: ['./warranty-reports.component.css'],
  providers: [WarrantyReportService]
})
export class WarrantyReportsComponent implements OnInit {
  public show: boolean = false;
  public hide: boolean = true;
  public chart ;
  public barChartData  = new Array();
  constructor(private warrantyReportService: WarrantyReportService) { }

  ngOnInit() {
    this.getWarrantyreport();
  }
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }
  a:number=1;
  select(n:number){
    this.a=n;
  }

  getWarrantyreport() {
 
    this.warrantyReportService.getWarrantyreport().subscribe(
      data => {
        console.log(data);
        for (var d of data) {
          this.chart= {"data":d.data,"label":d.modelfactory,"stack":d.part}
          this.barChartData.push(this.chart);
          this.barChartData1 = this.barChartData;
        }
      }
      )
     return  this.barChartData;
    
    }
    public barChartOptions:ChartOptions ={
      responsive: true,
      scales: {
        xAxes: [{
            stacked: true
        }],
        yAxes: [{
            stacked: true
        }]
              }
    };

   
  
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
  
  public barChartData1: ChartDataSets[] ;
  public barChartLabels: Label[] = ["39710","39540","39545","39200","39544","39810","39542","39541"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
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
