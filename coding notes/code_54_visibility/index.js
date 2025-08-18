const myButton = document.getElementById("myButton");

const myImg = document.getElementById("myImg");

myButton.addEventListener("click", doThis);


function doThis()
{
    if(myImg.style.visibility == "hidden")       //check invisible
    {
        myImg.style.visibility = "visible";      //make visible
    }
    else
    {
        myImg.style.visibility = "hidden";
    }
}