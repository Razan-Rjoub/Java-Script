
class User {
    //    static count=0;
    constructor(name, email, number) {
        this.name = name;
        this.email = email;
        this.number = number;
        // User.count++;
    }
    setName(name) {
        this.name = name;
    }
    // static countUser(){
    //     return `The number of users are ${User.count}`
    // }
}
// const user1={
//     name:"Razan",
//     email:"kkk@gmail.com",
//     number:"08998921"
// }
const User1 = new User("Razan", "razan@gmail.com", "079631345");
const User2 = new User("anfal", "anfal@gmail.com", "0776561215");
console.log(User1);
console.log(User2);
console.log(User1.name);

User1.setName("sawsan");
console.log(User1.name);
console.log(User1);

// console.log(User.countUser())
// console.log(User.count)
// console.log(User1.count)

console.log("###### Abstract ####### ");
// abstract
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {

        throw new Error('Method start() must be implemented.');
    }
    stop() {
        throw new Error('Method stop() must be implemented.');
    }
}
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
    }
    start() {
        console.log(`Starting the ${this.make} ${this.model}...`);
    }

    stop() {
        console.log(`Stopping the ${this.make} ${this.model}...`);
    }
}
class Bicycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
    }

    start() {
        console.log(`Pedaling the ${this.make} ${this.model}...`);
    }

    stop() {
        console.log(`Stopping the ${this.make} ${this.model}...`);
    }
}
// const v=new Vehicle('Toyota', 'Corolla', 2022);
// v.start();
const myCar = new Car('Toyota', 'Corolla', 2022);
myCar.start();
myCar.stop();
const myBike = new Bicycle('Schwinn', 'Cruiser', 2023);
myBike.start();
myBike.stop();