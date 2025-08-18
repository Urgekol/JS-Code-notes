/*

callback = a function passed as an argument to
           another function

*/

sum(2, 3, displayDemo);

function sum(x, y, myFunction)
{
    let result = x + y;
    myFunction(result);
}

function displayConsole(output)     //output - a parameter
{
    console.log(output);
}

function displayDemo(output)     //output - a parameter
{
    document.getElementById("demo").innerHTML += "<br>" + output;
}