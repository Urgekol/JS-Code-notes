

const myButton = document.getElementById("myButton");

const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

let x = 0;
let y = 0;

function begin()
{
    let timerId = setInterval(frame, 10);
}

function frame()
{
    if(x >=200 || y>=200)
    {
        clearInterval(timerId);

    } 
    else
    {
        x += 1;
        y += 1;

        myAnimation.style.left = x + "px";
        myAnimation.style.top = y + "px";
    }
}

/*
    this can be done is expansion of the box

    or,

    transformation of the color

    or,
    
    transformation of the degree
*/