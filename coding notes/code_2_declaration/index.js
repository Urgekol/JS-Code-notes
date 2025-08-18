//E:\code_with_me\java script

/* 

There are three types of non-data type declaration:

a. let - variable limited to the block scope{}        (this is more preferred)
b. var - variable limited to function(){}
c. const - constant variable

*/

let a = 70; 
console.log("Using let to store the data", a);
console.log();

// var a = 67;     - this will show an error
// let a = 55;     - this won't


/* 
      let b = 5;
      {
        var b = 99;      - error
      }                      
*/


var x = 40;
{
    var x = 55;      //not an error coz it's inside a scope
}
console.log("The value of the variable x is:",x);

let t = 90;
{
    let t = 20;
}
console.log("The value of the variable t is:",t);


//constant
const z = "Bro Code";