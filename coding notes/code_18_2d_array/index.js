
let fruits = ["apples", "oranges", "bananas"];

let vegetables = ["carrots", "onions", "potatoes"];

let meats = ["eggs", "chicken", "fish"];

let grocery = [fruits, vegetables, meats];

grocery[2][2] = "steak";    //chicken to steak

for (let list of grocery)
{
    for (let food of list)
        console.log(food);
}

//2d to 1d array
const newArr = grocery.flat();

document.getElementById("demo").innerHTML = newArr;