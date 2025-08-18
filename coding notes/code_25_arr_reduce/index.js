/*

    array.reduce()  =   reduce an array to a single value

    mostly uses in: "sum up the array"
*/

const numbers = [5, 4, 3, 2, 1];

let num = numbers.reduce(myFunc1);
console.log(num);


                //"total" is the first element of the array
function myFunc1(total, ele) 
{
    return total + ele;
}



let sqr = numbers.reduce(myFunc2);
console.log(sqr);

function myFunc2(total, ele)
{
    return total + Math.pow(ele,2);
}
// 5 + 4*4 + 3*3 + 2*2 + 1*1