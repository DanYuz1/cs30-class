// Perlin Noise Demo

let x; 
let y;
let time = 0;
const TIME_BUFFER = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // move ball
  x = noise(time) * width;
  y = noise(time + 1000) * height;

  // move on time axis
  time +=0.01;

  

  // dispaly ball
  fill("black");
  circle(x, y, 50);
}
