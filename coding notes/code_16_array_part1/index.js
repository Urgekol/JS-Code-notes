

let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconuts";

let length = fruits.length;

console.log(fruits);

fruits.push("lemon");   //add an element to the end    

fruits.pop();           //remove the end element

fruits.unshift("cherry");     //add an element to the beginning

fruits.shift();         //remove the beginning element

let index = fruits.indexOf("lemon");


/*    
    fruits = fruits.sort();
    fruits = fruits.sort().reverse();

    - this sorting techniques are used only for Strings
*/
for(let i of fruits)
{
    console.log(i);
}

