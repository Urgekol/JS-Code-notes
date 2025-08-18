class Car{

    constructor(model, year, color){

        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

const cars =[car1, car2, car3];

console.log("First car is:",cars[0].model);
console.log("Second car is:",cars[1].model);
console.log("Third car is:",cars[2].model);

cars.forEach(display);

function display(element){

    console.log(element);
}