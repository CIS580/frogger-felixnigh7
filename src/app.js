"use strict;"

/* Classes */
const Game = require('./game.js');
const Player = require('./player.js');
const Log = require('./log.js');
const Car = require('./car.js');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var player = new Player({x: 0, y: 240});
var background = new Image();
background.src = 'assets/background.png';   // from http://www.froggercssi.appspot.com/images/background3.png
var lives = 3;
var logs = [];
var cars = [];

for(var i = 0; i < 3; i++) {
  log.push(new Log({
    x: //500
    y: //30
  }));
}

for(var i = 0; i < 5; i++) {
  car.push(new Car({
    x: 100,
    y: 10
  }));
}

window.onkeydown = function(event) {
  event.preventDefault();
  console.log(event);
  switch(event.keyCode) {
     //up
    case 38:
    case 87:
      if(player.state == "idle") {
        player.state = "up";
        player.frame = -1;
      }
      break;
    //left
    case 37:
    case 65:
    if(player.state == "idle") {
      player.state = "left";
      player.frame = -1;
    }
    break;
    //right
    case 39:
    case 68:
    if(player.state == "idle") {
      player.state = "right";
      player.frame = -1;
    }
      break;
    //down
    case 40:
    case 83:
    if(player.state == "idle") {
      player.state = "down";
      player.frame = -1;
    }
      break;
  }
}

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {
  player.update(elapsedTime);
  // TODO: Update the game objects
  //cars
  //logs
  //Players
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.render(elapsedTime, ctx);
}
