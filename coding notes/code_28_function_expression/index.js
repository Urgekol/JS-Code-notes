/*

    function assigned to a variable (can be let, var, const)

*/



let greeting1 = function(){
    
    document.getElementById("demo").innerHTML = "Hello";

}

greeting1();    // the function must be mentioned first
                // before calling the "function variable"


//userName is the argument
let greeting2 = (userName) =>{
    console.log(userName)
}

greeting2("Bro Code");