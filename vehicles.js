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
    Vehicle.call(this, make, model, year);
    this.extendedCab = extendedCab;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

var truck1 = new Truck("Ford", "Ranger", 2008, true);

console.log(truck1.make + " " + truck1.model + " " + truck1.year + " " + truck1.extendedCab);


// Book Object and add to array

var Book = function Book(author, title){
    this.author = author;
    this.title = title;
}

var books = [];
var book1 = new Book("Shakespeare", "Romeo and Juliet");
books.push(book1);
var book2 = new Book("Stephen King", "The Gunslinger");
books.push(book2);

books.forEach(function(item, index, value){
    console.log(item.author + " " + item.title);
});


// Create Customer Object and add to array

var customers = [];
var Customer = function Customer(firstName, lastName, accountNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.accountNumber = accountNumber;

}

customers.push(new Customer("Joe", "Smith", 12345));
customers.push(new Customer("Mary", "Jones", 45678));

customers.forEach(function(item){
    console.log(item.firstName + " " + item.lastName + " " + item.accountNumber);
});


// More inheritance

var RescueAnimal = function RescueAnimal(animalName, age, altered, color){
    this.animalName = animalName;
    this.age = age;
    this.altered = altered;
    this.color = color;
    

    this.animalGreeting = function animalGreeting(){
        console.log("Hello, " + this.animalName + "!");
    }
}


var Dog = function Dog(animalName, age, altered, color, breed){
    RescueAnimal.call(this, animalName, age, altered, color);
    this.breed = breed;
}

var Cat = function Cat(animalName, age, altered, color, type, declawed){
    RescueAnimal.call(this, animalName, age, altered, color);
    this.type = type;
    this.declawed = declawed;
}

Dog.prototype = Object.create(RescueAnimal.prototype);
Dog.prototype.constructor = Dog;

Cat.prototype = Object.create(RescueAnimal.prototype);
Cat.prototype = Cat;


var dog1 = new Dog("Scooby Doo", "Young", true, "Brown", "Great Dane");
var cat1 = new Cat("Morris", "Adult", true, "orange", "Domestic Short Hair", false);

console.log(dog1.animalName + " " + dog1.age + " " + dog1.altered + dog1.color + dog1.breed);
console.log(cat1.animalName + " " + cat1.age + " " + cat1.altered + cat1.color + cat1.type + " " + cat1.declawed);
dog1.animalGreeting();