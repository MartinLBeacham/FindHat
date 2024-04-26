const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function deadEndLocSelect(fieldIndices) {
  const randomLoc = Math.floor(Math.random() * fieldIndices.length);
  const array = fieldIndices.splice(randomLoc, 1);
  return array[0];
}

function addDeadEnd(maze, deadEndNum, fieldIndices) {
  deadEndLocSelect(fieldIndices);
  while (deadEndNum > 0) {
    const deadEndLoc = deadEndLocSelect(fieldIndices);
    maze[deadEndLoc[0]][deadEndLoc[1]] = pathCharacter;
    deadEndNum--;
  }
  console.log("Dead Ends Added.")
  return maze;
}

module.exports = addDeadEnd;
