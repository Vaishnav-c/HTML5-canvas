var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

// Water

context.beginPath();
// context.moveTo(0,300);
// context.lineTo(400,300);
context.rect(0,300,400,300);
context.fillStyle = "blue";
context.strokeStyle = "blue";
context.fill();
context.stroke();




// Sail

context.beginPath();
context.moveTo(155,150);
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.fillStyle = "white";
context.strokeStyle = "white";
context.fill();
context.stroke();

// Flag


context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
context.fillStyle = "#15960A";
context.strokeStyle = "#15960A";
context.fill();
context.stroke();

// Bottom

context.rect(70,280,170,40);
context.fillStyle = "rgba(165,42,42,0.7)";
context.strokeStyle = "rgba(165,42,42,0.7)";
context.fill();
context.stroke();

// Mast

context.rect(150,100,10,180);
context.fillStyle = "black";
context.strokeStyle = "black";
context.fill();
context.stroke();


// Circle

context.beginPath();
context.arc(330,70,45,0,2*Math.PI,true);
context.fillStyle = "yellow";
context.strokeStyle = "yellow";
context.fill();
context.stroke();