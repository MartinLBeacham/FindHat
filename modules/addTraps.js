const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function trapLocSelect(fieldIndices) {
  const randomLoc = Math.floor(Math.random() * fieldIndices.length);
  const array = fieldIndices.splice(randomLoc, 1);
  return array[0];
}

function addTraps(maze, holeNum, fieldIndices) {
  const holeLocs = [];  
  while (holeNum > 0) {
    const trapLoc = trapLocSelect(fieldIndices);
    holeLocs.push(trapLoc);
    maze[trapLoc[0]][trapLoc[1]] = hole;
    holeNum--;
  }
  console.log("Traps Added.")
  return holeLocs;
}

module.exports = addTraps;
