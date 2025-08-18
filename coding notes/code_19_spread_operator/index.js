/*

    spread operator:    "  ... "

*/

let number = [1,2,3,4,5,6,7,8,9,];
console.log(number);

console.log(...number);

//happens in string also
userName = "Bro Code";

console.log(...userName);
    //separated with a single white_space


//use
let max1 = Math.max(number); //this will show no result
console.log(max1);

let max2 = Math.max(...number);
console.log(max2)

let class1 = ["Spongebob","Patrick","Sandy"];
let class2 = ["Squidward","Mr. Krabs","Plankton"];

//  class1.push(class2); - this will push an entire array,
//                         not the elements

class1.push(...class2);

console.log(...class1);