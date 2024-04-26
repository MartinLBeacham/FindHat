const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function blankMaze(rows, cols) {
    const maze = new Array(rows);
  
    for (let i = 0; i < maze.length; i++) {
      const newRow = new Array(cols).fill(fieldCharacter);
      maze[i] = newRow;
    }
  
    return maze;
  }

  module.exports = blankMaze;