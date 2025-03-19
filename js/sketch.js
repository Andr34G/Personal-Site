
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .001;

function setup (){
    canvas=createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    canvas.style("z-index", -2);
    //background(225);
}


function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
}

let img1;


function preload () {
  img1 = loadImage('images/MiffyPNG.png');
  
}

function draw(){
   clear ();
   drawThing(mouseX, mouseY)
}

function mouseMoved(){
    drawThing()
}

function drawThing(){
    //background(220);
  noTint();
    image(img1, mouseX, mouseY,50, 50);  
}
