import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  public show: boolean = false;
  public hide: boolean = true;
  public inner: boolean = false;
  public outer: boolean = true;
  public comment: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
    this.hide = !this.hide;
  }
  toggle1() {
    this.inner = !this.inner;
    this.outer = !this.outer;
  }
  toggle2() {
    this.comment = !this.comment;
    this.inner = !this.inner;
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
