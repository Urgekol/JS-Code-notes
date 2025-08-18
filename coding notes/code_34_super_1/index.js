/*

    super() = use to call the constructor of the super class

*/

class Car   //super class
{
    constructor(brand) 
    {
        this.carName = brand;
    }
    present() 
    {
        return 'I have a ' + this.carName;
    }
}
  
class Model extends Car 
{
    constructor(brand, model) 
    {
        super(brand);           //just sending the brand to Car class
        this.model = model;
    }
    show() 
    {
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.show());