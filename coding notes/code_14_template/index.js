
let userName = "Bro Code";

let items = 3;

let total = 75;


/*
Always do this:

console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("You total is $", total);

*/

console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`You total is $ ${total}`);

let text = 
`   Hello ${userName} <br>
    You have ${items} items in your cart <br>
    You total is $ ${total}`;

document.getElementById("demo").innerHTML = text;