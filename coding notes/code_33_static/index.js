/*

    static = belongs to the class not the objects

*/

class Car{

    static numberOfCars=0;

    constructor(model){
        this.model = model;;
        Car.numberOfCars++;
    }

    static startRace()      //this can only be accessed by class Car
    {
        console.log("3...2...1...Go!");
    }
}


const car1 = new Car();     //the number of times the object is created
const car2 = new Car();     //it will increase the value of numberOfCars
const car3 = new Car();
const car4 = new Car();

console.log(Car.numberOfCars);
Car.startRace();