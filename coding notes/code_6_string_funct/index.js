let userName;

document.getElementById("myButton").onclick = function(){

    userName = document.getElementById("name").value;
    console.log(userName);

    console.log(userName.length);

    console.log(userName.charAt(0));

    console.log(userName.indexOf("o"));
    
    console.log(userName.lastIndexOf("o"));
    
    userName = userName.replaceAll(" ","_");
    
    console.log(userName);

    console.log(userName.toUpperCase);

    console.log(userName.toLowerCase());

    console.log(userName.slice(4));
    
    console.log(userName.slice(0,3));

}