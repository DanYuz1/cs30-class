// Grid Demo
// 2d arrays

let theGrid = [
  [1,0,1,0], 
  [0,0,1,1],
  [1,1,0,0],
  [0,1,0,1]
];

let cellSize;
let SQUARE_DIMENSIONS =  theGrid.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if(width < height) {
    cellSize = width/SQUARE_DIMENSIONS;
  }
  else{
    cellSize = height/SQUARE_DIMENSIONS;
  }
}

function draw() {
  background(220);
  showGrid();
}


function showGrid(){
  for (let y = 0; y > SQUARE_DIMENSIONS; y++){
    for (let x = 0; x < SQUARE_DIMENSIONS; x++){
      if (theGrid[y][x] === 1){
        fill("black");
      }
      else if (theGrid[y][x] === 0){
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mousePressed() {
  
}