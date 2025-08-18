/*

setInterval()   =   invokes a function repeatedly after a number of milliseconds
                    asynchronous function (doesn't execute)
                    

*/

let count = 0;
let max = prompt("Count up to what number ?");

max = Number(max);

const myInterval = setInterval(countUp, 1000);     //1s

function countUp() {

    count++;
    console.log("count", count);

    if(count > max) {
        clearInterval(myInterval);
    }
}

