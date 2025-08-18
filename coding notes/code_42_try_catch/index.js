/*
    error handling using
        try - catch block
*/

try{
    let x = prompt("Enter the value of X");

    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";
    if(x == "") throw "That was empty!";

    document.getElementById("demo").innerHTML = `${x} is a number`;
}
catch(err_message)
{
    document.getElementById("demo").innerHTML = err_message;
}