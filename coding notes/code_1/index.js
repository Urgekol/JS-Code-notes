let firstName = prompt("Enter your name: ");

let age = prompt("Enter your age: ");

let student = true;

console.log("Hello", firstName);


//this will change the content of the "p1" tag
document.getElementById("p1").innerHTML = "Welcome " + firstName;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Enrolled " + student;