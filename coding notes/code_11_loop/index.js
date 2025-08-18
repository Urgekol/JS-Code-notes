// for loop is generally the same

let obj = {
    Harsh:90,
    Kirti:44,
    Shayan:28,
    Nick:87,
    Dev:87
}
  
//for in loop - object
for(let i in obj)
{
    console.log(i , ":" , obj[i]);
}

//for of loop - string, array
let ss = "Bro Code";
for(let i of ss)        
{                       
    console.log(i);
}

/*
    using "let" destroyed the above variable i 

    but if using "var" will show error in this loop
*/
    