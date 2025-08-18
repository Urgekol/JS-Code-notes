/*

    array.filter()  =   creates a new array with all the elements
                        that pass the test provided by the function

*/

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(display);

function checkAge(element) {
    return elements>=18;        //the test
}

function display(element) {
    console.log(element);
}