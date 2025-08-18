
const myDiv = document.getElementById("myDiv");

window.addEventListener("keydown", move);

let x = 0;
let y = 0;

//event - an argument of the function
function move(event)
{
    switch(event.key){

        case "ArrowDown":
        {
            y += 5;
            myDiv.style.top = y + "px";     //css styling
            break;
        }
        case "ArrowUp":
        {
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        }
        case "ArrowRight":
        {
            x += 5;
            myDiv.style.left = x + "px";     
            break;
        }
        case "ArrowLeft":
        {
            x -= 5;
            myDiv.style.left = x + "px";     
            break;
        }
        default:
        {
            break;
        }
    }
}