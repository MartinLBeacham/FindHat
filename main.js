const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./modules/field.js");
const Player = require("./modules/player.js");
const { hat, hole, fieldCharacter, pathCharacter } = require("./modules/mazeChars.js");

const testField = new Field(20, 10);

const displayField = Field.blankField(testField.rows, testField.cols);

const player = new Player();

Field.displayHoles(displayField, testField);

// Field.mazePrinter(testField.maze);

function welcome() {
  console.log(
    "Welcome to the Maze!\nInput 'forward', 'backward', 'left', 'right'\
  to go in that direction."
  );
}

function endGame(type){

  if(type==='Loss'){
    console.log('You have died.');
  } else if(type==="Win"){
    console.log('You found the relic!');
  } else{console.log("Error: invalid end type");}

  }

function userInterface() {
  const prevRow = player._position[0];
  const prevCol = player._position[1];
  
  let direction = prompt("Which direction do you dare venture?").trim().toLowerCase();

  player.move(direction);
  const currRow = player._position[0];
  const currCol = player._position[1];
  
  displayField[prevRow][prevCol]= testField.maze[prevRow][prevCol]

  if(testField.maze[currRow][currCol]===hole){
    console.log(`You went ${direction} and fell into a hole!`);
    displayField[currRow][currCol] = "💀"
    Field.mazePrinter(displayField);
    endGame('Loss');
    return 'end';
  }

  if(testField.maze[currRow][currCol]===fieldCharacter){
    console.log('You hit a wall!');
    player.hitWall();
    player._position[0] = prevRow;
    player._position[1] = prevCol;
    return 'continue';
  }

  if(player.checkOutOfBounds()){
    console.log('You fell off the map!');
    endGame('Loss');
    displayField[prevRow][prevCol] = "💀"
    Field.mazePrinter(displayField);
    return 'end';
  }

  console.log(`You venture ${direction}`);


  return 'continue';
}


welcome();
let status = 'continue';
while(status !== 'end'){
  displayField[player._position[0]][player._position[1]]= "🧙";
  Field.mazePrinter(displayField);
  status = userInterface();

};