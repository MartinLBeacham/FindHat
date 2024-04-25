const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function findFieldIndices(maze) {
  const fieldIndices = [];

  maze.forEach((element, row) => {
    element.forEach((subElement, col) => {
      if (subElement === fieldCharacter) {
        fieldIndices.push([row, col]);
      }
    });
  });
  return fieldIndices;
}

module.exports = findFieldIndices;
