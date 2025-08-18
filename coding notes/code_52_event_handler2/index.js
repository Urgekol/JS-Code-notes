/*
    .addEventListener(event, function, useCapture)
*/

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click",changeBlue);
outerDiv.addEventListener("click",changeBlue, true);
        /* 
            true - will help to carry out the event of
                   the outer element than the inner element 

                   when clicked on the innerDiv box.
        */
function changeBlue()
{
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}