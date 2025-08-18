const myButton = document.getElementById("myButton");

const myImg = document.getElementById("myImg");

myButton.addEventListener("click", doThis);


function doThis()
{
    if(myImg.style.display == "none")       //check invisible
    {
        myImg.style.display = "block";      //make visible
    }
    else
    {
        myImg.style.display = "none";
    }
}