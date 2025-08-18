
/*

    moral of the story:
    can't repeat the parameters in the constructor of the child classes

    therefore, super Class helps to not repeat the code 
*/


class Animal{

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    
}

class Rabbit extends Animal
{
    constructor(name , age ,runSpeed)
    {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal
{
    constructor(name, age, swimSpeed)
    {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal
{
    constructor(name, age, flySpeed)
    {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);