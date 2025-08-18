/*  array.map()  =  executes a provided callBack function 
                    once for each element 
                    And, creates a new array      
*/


let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

squares.forEach(display);

function square(element) {
    return Math.pow(element,2);
}

function display(element) {
    console.log(element);
}