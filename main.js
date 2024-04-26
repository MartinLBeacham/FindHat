const prompt = require("prompt-sync")({ sigint: true });
const readline = require("readline");
const Field = require("./modules/field.js");
const Player = require("./modules/player.js");
const {
  hat,
  hole,
  fieldCharacter,
  pathCharacter,
  playerChar,
} = require("./modules/mazeChars.js");

const testField = new Field(20, 10);

const displayField = Field.blankField(testField.rows, testField.cols);

const player = new Player();

Field.displayHoles(displayField, testField);

Field.mazePrinter(displayField);

function welcome() {
  console.log(
    "Welcome to the Maze!\nInput 'f', 'b', 'l', 'r'\
  to go in that direction."
  );
}

function endGame(type) {
  if (type === "Loss") {
    console.log("You have died.");
  } else if (type === "Win") {
    console.log("You found the relic!");
  } else {
    console.log("Error: invalid end type");
  }
  process.exit();
}

function userInterface(direction) {
  const prevRow = player._position[0];
  const prevCol = player._position[1];

  displayField[prevRow][prevCol] = playerChar;


  player.move(direction);
  const currRow = player._position[0];
  const currCol = player._position[1];

  displayField[prevRow][prevCol] = testField.maze[prevRow][prevCol];

  if (player.checkOutOfBounds()) {
    console.log("You fell off the map!");
    displayField[prevRow][prevCol] = "💀";
    Field.mazePrinter(displayField);
    endGame("Loss");
  } else {
    displayField[currRow][currCol] = playerChar;
  }

  if (testField.maze[currRow][currCol] === hole) {
    console.log(`You went ${direction} and fell into a hole!`);
    displayField[currRow][currCol] = "💀";
    Field.mazePrinter(displayField);
    endGame("Loss");
    return "end";
  }

  if (testField.maze[currRow][currCol] === fieldCharacter) {
    console.log("You hit a wall!");
    player.hitWall();
    player._position[0] = prevRow;
    player._position[1] = prevCol;
    displayField[currRow][currCol]="🟥";
    displayField[prevRow][prevCol] = playerChar;
    Field.mazePrinter(displayField);
    return "continue";
  }

  if (testField.maze[currRow][currCol] === hat) {
    console.log("What's this?!");
    player._position[0] = prevRow;
    player._position[1] = prevCol;
    Field.mazePrinter(displayField);
    endGame("Win");

  }

  Field.mazePrinter(displayField);
  console.log(`You venture ${direction}`);

  return "continue";
}

welcome();

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on("keypress", (chunk, key) => {
  if (key && key.name == "q") {
    process.exit();
  } else if (key && key.name == "r") {
    userInterface("r");
  } else if (key && key.name == "l") {
    userInterface("l");
  } else if (key && key.name == "f") {
    userInterface("f");
  } else if (key && key.name == "b") {
    userInterface("b");
  } else {
    process.exit();
  }
});
