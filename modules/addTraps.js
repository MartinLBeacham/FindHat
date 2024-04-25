const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function trapLocSelect(fieldIndices) {
  const randomLoc = Math.floor(Math.random() * fieldIndices.length);
  const array = fieldIndices.splice(randomLoc, 1);
  return array[0];
}

function addTraps(maze, trapNum, fieldIndices) {
    while (trapNum > 0) {
    const trapLoc = trapLocSelect(fieldIndices);
    maze[trapLoc[0]][trapLoc[1]] = hole;
    trapNum--;
  }

  return maze;
}

module.exports = addTraps;
