/*    
    fruits = fruits.sort();
    fruits = fruits.sort().reverse();

    - this sorting techniques are used only for Strings
*/

//for numeric - sort
const arr = [40, 100, 1, 5, 25, 10];
arr.sort(descendingSort);
arr.forEach(display);

arr.sort(ascendingSort);
arr.forEach(display);

function descendingSort(a, b){
    return b - a;
}

function ascendingSort(a, b){
    return a - b;
}


function display(element)
{
    console.log(element);
}
    
