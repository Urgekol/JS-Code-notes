
document.getElementById("myButton").onclick = function(){

    if(document.getElementById("myCheckbox").checked == true)
    {
        console.log("You are a subscriber")
    }
    else
    {
        console.log("You are not a subscriber")
    }

}

/*

    - alternative method to code

document.getElementById("myButton").onclick = function(){

    const myCheckbox = document.getElementById("myCheckbox");
    if(myCheckbox.checked)
    {
        console.log("You are a subscriber")
    }
    else
    {
        console.log("You are not a subscriber")
    }

}

*/