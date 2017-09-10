// Wait for the DOM to be prepared before doing anything
document.addEventListener("DOMContentLoaded", initCanvas)

var myCanvas = null;
var penColour = "black";

function initCanvas() {
  myCanvas = document.getElementById('canvasArea'); // assign canvas area
  myCanvas.addEventListener("mousedown", trackMouse); // event listener for mouse click held down
  myCanvas.addEventListener("mouseup", stopTrackMouse); // event listener for mouse click release
}

function trackMouse() {
  myCanvas.addEventListener("mousemove", draw); // start listening to mousemove
}

function stopTrackMouse () {
  myCanvas.removeEventListener("mousemove", draw); // stop listening to mousemove
}

function draw(evt) {
  var ctx = myCanvas.getContext("2d"); // have to have this to enable draw methods with HTML5 context object
  var X = event.clientX; // track mouses x position
  var Y = event.clientY - 50; // track mouses y position
  ctx.fillStyle = penColour;
  ctx.beginPath();
  ctx.arc(X,Y,15,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function r(){
  penColour = "red";
}

function g(){
  penColour = "green";
}

function b(){
  penColour = "blue";
}

function y(){
  penColour = "yellow";
}

function p(){
  penColour = "black";
}

function e(){
  penColour = "white";
}

function wipe() {
  myCanvas
    .getContext("2d")
    .clearRect(0, 0, myCanvas.width, myCanvas.height)
}
