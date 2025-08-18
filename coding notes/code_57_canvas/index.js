
/*
    canvas API = a means for drawing graphics
                 used for animations, games, data, visualization

*/

let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");


context.strokeStyle = "purple";
context.lineWidth = 10;

context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);

context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);

context.stroke();       //this will draw as written



//rectangle
let canvasRec = document.getElementById("myRec");

let rec = canvasRec.getContext("2d");

rec.lineWidth = 5;              //width of the "rec" canvas border
rec.fillStyle = "black";
rec.fillRect(0,0,250,250);
rec.strokeStyle = "red";        //red border;
rec.strokeRect(0, 0, 250, 250);



//circle
let canvasCir = document.getElementById("myCir");

let cir = canvasCir.getContext("2d");

cir.fillStyle = "lightblue";
cir.strokeStyle = "darkblue";
cir.lineWidth = 10; 
cir.beginPath();
// starting position (x,y)  ,  radius  ,  sAngle  ,  eAngle
cir.arc(250 , 250 , 200 , 0 , 2 * Math.PI);
cir.stroke();
cir.fill();



//text
let canvasText = document.getElementById("myText");

let t = canvasText.getContext("2d");

t.font = "50px MV Boli";    //size with font
t.fillStyle = "grey";
t.textAlign = "center";
t.fillText("You win!", 250 , 250);

