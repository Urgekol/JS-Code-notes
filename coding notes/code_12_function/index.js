
let x = myFunction(4, 3);

document.getElementById("demo").innerHTML = x;

function myFunction(a, b)    //no need to declare the local variable
{
    return a * b;
}

//functions can may or may not return