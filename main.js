var myCanvas = document.getElementById('canvasArea'); // defining canvas area

var tracking = false; // declaring tracking variable

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
    var Y = event.clientY; // track mouses y position
    ctx.fillStyle = "rgba(0,200,0,1)"; // "(r,g,b,aplha)"
    ctx.fillRect(X,Y,22,22); // draws rectangle (x, y, w, h);
    //ctx.arc(100,75,50,0,2*Math.PI);
  }

}

/*
switch
case default: black;
if q w e r t y u i o p boxes

- and + for size
if statement for each time function on key is activated
For +
count ++
if (count == 5) {
shapeDimensionsW =
shapeDimensionsHe =
}

//onmousemove
*/
