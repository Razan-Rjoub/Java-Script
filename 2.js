// Inheritance

class Student extends User {
    constructor(name, email, number, grade) {
        super(name, email, number);
        this.grade = grade;
    }
}
const student1 = new Student("Anfal", "Anfal@gmail.com", "07759428291", 90);
const student2 = new Student("Sawsan", "sawsan@gmail.com", "07859428432", 85);
console.log(student1);
console.log(student2);
student1.setName("Yousef");

console.log(student1);
console.log("########Encapsulation########");
// Encapsulation
class Car {
    #price;
    constructor(model, year, color, price) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.#price = price;
    }
    getPrice() {
        return this.#price;
    }
}
const car1 = new Car("BMW", "2016", "red", "18000");
console.log(car1)
console.log(car1.price);
console.log(car1.getPrice());


// Polymorphism
class Animal {
    animalSound() {
        System.out.println("The animal makes a sound");
    }
}

class Pig extends Animal {
    animalSound() {
        System.out.println("The pig says: wee wee");
    }
}

class Dog extends Animal {
    animalSound() {
        System.out.println("The dog says: bow wow");
    }
}