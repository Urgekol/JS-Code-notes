
class Car{

    constructor(power){

        this._power = power;
    }

    get power(){
        return this._power + "hp";
    }
}
/* 
    _power = symbolizes the variable is protected
             must not disturb the variable
*/


let car = new Car(400);

/*
    we technically can say change the protected variable
    car._power = 1000000000;

    but, must not use it
*/

console.log(car.power);