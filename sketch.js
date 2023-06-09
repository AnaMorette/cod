var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState
var car1, car2,car1_img, car2_img;
var cars;
var track;
var allPlayers;
var fuelImage,fuels,powerCoinImage,powerCoins;
var lifeImage

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img=loadImage("./assets/car1.png");
  car2_img=loadImage("./assets/car2.png");
  track=loadImage("./assets/track.jpg");
  fuelImage=loadImage("assets/fuel.png");
  powerCoinImage=loadImage("assets/goldCoin.png");
  lifeImage= loadImage("assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount===2){
   game.update(1);
  }
  if(gameState===1){
   game.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
