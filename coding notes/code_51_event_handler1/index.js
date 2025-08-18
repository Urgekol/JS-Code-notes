/*
    .addEventListener(event, function, usCapture)

    You can add many event handlers to one element

    Even the same event that invokes different functions
*/

const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);

function changeRed() {
    innerDiv.style.backgroundColor = "red";
}

function changeGreen() {
    innerDiv.style.backgroundColor = "lightgreen";
}