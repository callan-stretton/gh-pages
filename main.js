var myCanvas = document.getElementById('canvasArea'); // defining canvas area

var tracking = false; // declaring tracking variable
var penColour = "black";

myCanvas.addEventListener("mousedown", trackMouse); // event listener for mouse click held down
myCanvas.addEventListener("mouseup", stopTrackMouse); // event listener for mouse click release

function trackMouse() {
  tracking = true; // sets tracking variable to true
  myCanvas.addEventListener("mousemove", draw); // initialises mousemove event listener in conjunction with the draw function
}

function stopTrackMouse () {
  tracking = false; // sets tracking variable to true
}


function draw(evt) {
  if (!tracking) { // if tracking is set to false, return out of function
    return
  } else {
    var ctx = myCanvas.getContext("2d"); // have to have this to enable draw methods with HTML5 context object
    var X = event.clientX; // track mouses x position
    var Y = event.clientY - 50; // track mouses y position
    ctx.fillStyle = penColour;
    ctx.beginPath();
    ctx.arc(X,Y,15,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
  }
}

function r(evt){
  penColour = "red";
}

function g(evt){
  penColour = "green";
}

function b(evt){
  penColour = "blue";
}

function y(evt){
  penColour = "yellow";
}

function p(evt){
  penColour = "black";
}

function e(evt){
  penColour = "white";
}
