import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cars: any[] = [{id: 1, name: 'audi'}, {id: 2, name: 'opel'}, {id:3, name: 'bmw'}];
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
