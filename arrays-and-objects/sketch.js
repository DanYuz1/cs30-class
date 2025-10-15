// Project Title
// Daniel Yuzbashev
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,0,0,0,0,0,0,1],
  [1,0,1,0,1,0,1,1,1,1,0,1],
  [1,0,1,0,0,0,0,0,0,1,0,1],
  [1,0,1,1,1,1,1,1,0,1,0,1],
  [1,0,0,0,0,0,0,1,0,1,0,1],
  [1,1,1,1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,0,1,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1]
];

let tileSize = 40;
let player;
let enemies = [];
let coins = [];
let score = 0;

function setup() {
  createCanvas(maze[0].length * tileSize, maze.length * tileSize);
  
  // Create player
  player = { 
    x: 1, 
    y: 1, 
    speed: 1 
  };
}
function draw() {
  background(220);
}

