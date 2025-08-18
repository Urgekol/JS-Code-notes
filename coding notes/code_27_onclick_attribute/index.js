let count = 0;

function increaseCount() {
    if(count == 10)
    {
        document.getElementById("demo").innerHTML = "Reached the lower limit";
    }
    else{
        count++;

    document.getElementById("demo").innerHTML = count;
    }
}

function decreaseCount() {
    if(count == -10)
    {
        document.getElementById("demo").innerHTML = "Reached the lower limit";
    }
    else{
        count--;

    document.getElementById("demo").innerHTML = count;
    }
}

function resetCount() {
    count=0;

    document.getElementById("demo").innerHTML = count;
}