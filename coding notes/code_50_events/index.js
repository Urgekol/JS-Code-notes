/*
    const element = document.getElementById("myButton");
    element.onclick = doSomething1;
*/

/*
    const element = document.body;
    element.onload = doSomething1;

    element.onchange = doSomething1;

    function doSomething1() {
        alert("Did something!");
    }
*/

/*

*/
const element = document.getElementById("myDiv");

/*
    element.onmouseover = doSomething;

    element.onmouseout = doSomethingElse;
*/

element.onmousedown = doSomething;  // click and hold

element.onmouseup = doSomethingElse;    //let go....

function doSomething() {
    element.style.backgroundColor = "red";
}

function doSomethingElse() {
    element.style.backgroundColor = "lightgreen";
}