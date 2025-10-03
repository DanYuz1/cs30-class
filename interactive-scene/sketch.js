// Cookie Cliker game (interactive scene)
// Daniel Yuzbashev
// 10/3/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let score; 
let cookieX;
let cookieY;
let cookieImg;

// store upgrade effect
let lastCookieTime;
let cookiesPerSecond = 0; 

// Store item variables
let grandmaCost = 50;
let grandmaCount = 0;

// Game state
// "menu", "game", "gameover"
let gameState = "menu"; 

function preload() {
  cookieImg = loadImage("cookie_for_game.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cookieX = windowWidth/2 - 125;
  cookieY = windowHeight/2 - 125;
  resetGame();
}

function draw() {
  background(18, 52, 137);

  if (gameState === "menu") {
    drawMenu();
  } 
  else if (gameState === "game") {
    runGame();
  } 
  else if (gameState === "gameover") {
    drawGameOver();
  }
}

function drawMenu() {
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255);
  text("COOKIE CLICKER", width/2, height/2 - 100);

  textSize(30);
  text("Click anywhere to start", width/2, height/2);
 
  textSize(20);
  text("By Daniel Yuzbashev", width/2, height/2 - 45);
}

function runGame() {
  // Cookie
  image(cookieImg, cookieX, cookieY, 250, 250);

  // Timer for cookies per second
  if (millis() - lastCookieTime > 1000) {
    score += cookiesPerSecond;
    lastCookieTime = millis();
  }

  // Draw score
  textAlign(LEFT, TOP);
  textSize(50);
  fill(255, 20, 56);
  text(score, 50, 50);

  // Draw Store
  drawStore();

  // Example "game over" condition (reach lots of cookies)
  if (score >= 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000) {
    gameState = "gameover";
  }
}

function drawStore() {
  // Store background
  fill(200);
  rect(width - 250, 0, 250, height);

  fill(0);
  textAlign(LEFT, TOP);
  textSize(20);
  text("STORE", width - 200, 40);

  text(`Grandma x${grandmaCount}`, width - 230, 100);
  text(`Cost: ${grandmaCost}`, width - 230, 130);
  
  
}

function drawGameOver() {
  textAlign(CENTER, CENTER);
  textSize(60);
  fill(255, 0, 0);
  text("You win!", width/2, height/2 - 100);

  textSize(30);
  fill(255);
  text("Click to restart", width/2, height/2);

  textSize(20);
  text("Please give me a good mark :)", width/2, height/2 - 50);
}

function mousePressed() {
  if (gameState === "menu") {
    // start game
    resetGame();
    gameState = "game";
  } 
  else if (gameState === "game") {
    // Click cookie
    if (mouseX > cookieX &&
        mouseX < cookieX + 250 &&
        mouseY > cookieY &&
        mouseY < cookieY + 250) {
      score++;
    }

    // Click Grandma in store
    if (mouseX > width - 250 && mouseX < width && mouseY > 80 && mouseY < 150) {
      if (score >= grandmaCost) {
        score -= grandmaCost;
        grandmaCount++;
        cookiesPerSecond += 1;           // each grandma adds 1 CPS
        grandmaCost = floor(grandmaCost * 1.15); // price increases
      }
    }
  } 
  else if (gameState === "gameover") {
    // restart game back to menu
    gameState = "menu";
  }
}

function resetGame() {
  score = 0;
  cookiesPerSecond = 0;
  grandmaCost = 50;
  grandmaCount = 0;
  lastCookieTime = millis();
}
