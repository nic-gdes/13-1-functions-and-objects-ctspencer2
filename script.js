
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
        return `This is a ${this.year} ${this.model}, made by ${this.make}.`;
    }
}

// Car instances
const toyotaCamry = new Car("Toyota", "Camry", 2006);
const toyotaSupra = new Car("Toyota", "Supra", 2005);
const miniCooper = new Car("Mini", "Cooper", 1969);
const chevyCamaro = new Car("Chevy", "Camaro", 1969);

// Array of cars
let allCars = [];
allCars.push(toyotaCamry, toyotaSupra, miniCooper, chevyCamaro);

// Function to display car information
function salesMan(car) {
    console.log(car.describe());
}

// Loop through all cars and display their information
for (let car of allCars) {
    salesMan(car);
}