

let a= 1;
let b= 2;
let c= 3;
let d= 4;
let e= 5;

console.log(sum(a,b,c));
document.getElementById("demo").innerHTML += "<br>" + sum(a,b,c);

function sum(...numbers)    //indefinite arguments
{
    let total = 0;
    for(let num of numbers)
    {
        total += num;
    }
    return total;
}