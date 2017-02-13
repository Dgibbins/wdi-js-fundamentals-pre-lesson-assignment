console.log('Pac-Man eats ghosts for lunch.');
// This is a single line comment in JS


         /* Multi line comment
                              in JS */

// Arrays
var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];
console.log("-------------------------------")
console.log("----------ARRAYS--------------")
console.log('There are ' + ghosts.length + ' ghosts.');
console.log ('Their names are: ' );
console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);


// Objects
console.log("-------------------------------")
console.log("----------OBJECTS--------------")

var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);

console.log("-------------------------------")
console.log("----------OBJECTS-II-----------")

var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'};

console.log(ghosts.inky);
console.log(ghosts.blinky);

console.log(ghosts['inky']);
console.log(ghosts['blinky']);


console.log("-------------------------------")
console.log("------------LOOPS--------------")

var ghosts = ['Inky', 'Blinky', 'Pinky', "Clyde"];

for (var index = 0 ; index < ghosts.length; index++)
  {
    console.log('Pac-Man eats ' + ghosts[index]);
  }

console.log("---------------CONDITIONALS-------------");

var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');

console.log('----------------SWITCH-------------------');
var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde'
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

console.log('-------------__FUNCTIONS-----------')

function eatDot(){
 console.log("MUNCH!");
 }

 var eatDot = function() {
   console.log("MUNCH!");
 }

console.log('---------CALLING FUNCTION----------');
  var highScores = [];
 function addHighScore(highScoreList, playerInitials, score) {
   var record = {player: playerInitials, score: score};
   highScoreList.push(record);
   }
undefined
console.log('---------RETURN VALUES----------');
function addScore(currentScore, eaten) {
  switch (eaten) {
  case 'dot':
    scoreToAdd = 10;
    break;
  case 'powerPellet':
    scoreToAdd = 50;
    break;
  case 'firstGhost':
    scoreToAdd = 200;
    break;
  case 'secondGhost':
    scoreToAdd = 400;
    break;
  }

  return currentScore + scoreToAdd;
}


var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
