
let username;

document.getElementById("myButton").onclick = function() {
    // on clicking the button, this function will activate

    username = document.getElementById("name").value;
    //this will store value from the input in variable "username" 
    
    console.log("Hello",username);
    

    document.getElementById("head1").innerHTML = "Hello " + username;
}