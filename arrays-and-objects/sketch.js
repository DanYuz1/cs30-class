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

  // Create enemies
  enemies.push({ x: 10, y: 1, speed: 0.02 });
  enemies.push({ x: 10, y: 7, speed: 0.02 });
  
  // Create coins
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 0 && random() < 0.15) {
        coins.push({ x, y, collected: false });
      }
    }
  }
}

function draw() {
  background(30);
  
  drawMaze();
  drawCoins();
  drawEnemies();
  drawPlayer();
  movePlayer();
  
  checkCoinCollection();
  checkEnemyCollision();
  
  // Display score
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("Score: " + score, 10, 25);
}

function drawMaze() {
  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      if (maze[y][x] === 1) {
        fill(70);
        rect(x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}

function drawPlayer() {
  fill(0, 200, 255);
  rect(player.x * tileSize + 10, player.y * tileSize + 10, tileSize - 20, tileSize - 20);
}

function movePlayer() {
  if (keyIsDown(65) && canMove(player.x - player.speed, player.y)) {player.x -= player.speed;}
  if (keyIsDown(68) && canMove(player.x + player.speed, player.y)) {player.x += player.speed;}
  if (keyIsDown(87) && canMove(player.x, player.y - player.speed)) {player.y -= player.speed;}
  if (keyIsDown(83) && canMove(player.x, player.y + player.speed)) {player.y += player.speed;}
  ;
}

function canMove(x, y) {
  x = floor(x);
  y = floor(y);
  return maze[y] && maze[y][x] === 0;
}

function drawCoins() {
  fill(255, 215, 0);
  for (let c of coins) {
    if (!c.collected) {
      ellipse(c.x * tileSize + tileSize / 2, c.y * tileSize + tileSize / 2, 15);
    }
  }
}

function checkCoinCollection() {
  for (let c of coins) {
    if (!c.collected && dist(player.x, player.y, c.x, c.y) < 0.5) {
      c.collected = true;
      score++;
    }
  }
}

function drawEnemies() {
  fill(255, 0, 0);
  for (let e of enemies) {
    // Chase player
    if (e.x < player.x) {e.x += e.speed;}
    if (e.x > player.x) {e.x -= e.speed;}
    if (e.y < player.y) {e.y += e.speed;}
    if (e.y > player.y) {e.y -= e.speed;}
    ;
    
    ellipse(e.x * tileSize + tileSize / 2, e.y * tileSize + tileSize / 2, 25);
  }
}

function checkEnemyCollision() {
  for (let e of enemies) {
    if (dist(player.x, player.y, e.x, e.y) < 0.5) {
      noLoop();
      fill(255);
      textSize(32);
      textAlign(CENTER);
      text("GAME OVER!", width / 2, height / 2);
    }
  }
}
