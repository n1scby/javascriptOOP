"use strict";
// constructor

var Vehicle = function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

var car = new Vehicle("Honda", "CRV", 2004);

console.log(car.make + "  " + car.model + "  " + car.year);

// use closure

var Auto = function Auto(make, model, year){
    var auto_make = make;
    var auto_model = model;
    var auto_year = year;

    return {
        autoMake: make,
        autoModel: model,
        autoYear: year
    };
}

var car2 = Auto("Ford", "Explorer", 2013);

console.log(car2.autoMake, car2.autoModel, car2.autoYear);


// Inheritance

var Truck = function Truck(make, model, year, extendedCab) {
    Vehicle.call(this, year, make, model);
    this.extendedCab = extendedCab;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

var truck1 = new Truck("Ford", "Ranger", 2008, true);

console.log(truck1.make + " " + truck1.model + " " + truck1.year + " " + truck1.extendedCab);



