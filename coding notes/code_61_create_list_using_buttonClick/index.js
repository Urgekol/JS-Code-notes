let count = 0;
const limit = 10;

function createList() 
{
    if (count < limit) 
    {
        let ul = document.getElementById("listContainer");
        let li = document.createElement("li");
        li.textContent = "This is a list " + (count + 1);
        ul.appendChild(li);
        count++;
    } 
    else 
    {
        alert("Limit reached!");
    }
}
