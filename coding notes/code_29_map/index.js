/*

    Map = object that holds key-value pairs of any data type

*/

const store = new Map([
/*  [key  , value]       */
    ["t-shirt",20],
    ["jeans",30],
    ["socks",10],
    ["hat",40]
]);

store.forEach((value, key) => {

    document.getElementById("items").innerHTML += `${key} and $${value} <br>`;
    console.log(`${key} and $${value}`);
});

store.set("gloves",20);     // to add

store.delete("gloves")      // to delete


let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("socks");

document.getElementById("cart").innerHTML += "$" + shoppingCart;


//check item
document.getElementById("ques").innerHTML += store.has("hat");

document.getElementById("ques").innerHTML += "<br><br>No. of items are: "
                                            + store.size;


