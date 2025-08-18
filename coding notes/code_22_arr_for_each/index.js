/*

    arr.forEach()   =   gives specific data of the array
                        to a function

                        a. current Element
                        b. current element index

    syntax:
    arr.forEach(user_function);
    
    user_function(curr_ele, index, arr){

    }

*/

//  [example:1]
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) 
{
  text += index + ": " + item + "<br>"; 
}


//  [example:2]
const numbers = [65, 44, 12, 4];
numbers.forEach(userFunction)

function userFunction(item, index, arr) {
  arr[index] = item * 10;
}