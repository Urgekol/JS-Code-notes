/* 

  There are 7 types of primitive data type:
  
  a. Null
  b. Number  - there is no integer or double
               all lies in the same data type
  c. String
  d. Symbol
  e. Undefined
  f. Boolean
  g. BigInt

*/

let a = null;

let b = 44;

let c = true;

let d = BigInt(566) + BigInt(34);

let e = "Bro Code";

let f = Symbol("%");

let g = undefined;

console.log(a, b, c, d, e, f, g);

console.log(typeof(d));


//object in JS
let car1 = {
  model: "Mustang",
  color: "red",
  year: 2023,  

  drive : function(){
    console.log(`You drive the car ${this.model}`);
  },  
  

/*
    this = reference to a particular object
           the object depends on the immediate content
*/

  brake : function(){
    console.log(`You apply brake`);
  }
}            
console.log("Your car color is:", car1.color);
console.log("Your car's year edition is:", car1["year"]);
//both are allowed

let car2 = {
  model: "Corvette",
  color: "yellow",
  year: 2024,  

  drive : function(){
    console.log(`You drive the car ${this.model}`);
  },

  brake : function(){
    console.log("You apply brake");
  }
}            
