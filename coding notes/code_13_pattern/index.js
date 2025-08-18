

let n;

document.getElementById("myButton").onclick = function() {

    n = document.getElementById("row").value;
   
    

    for(let i = 1; i <= n; i++)
    {
        for(let j = 1; j <= i; j++)
        {
            document.getElementById("myPattern").innerHTML += j;
        }
        document.getElementById("myPattern").innerHTML += "<br>";
    }
}