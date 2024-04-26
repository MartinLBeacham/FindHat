const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");

function displayHoles(displayField, mapField){
    mapField.holeLocs.forEach(element => {
      displayField[element[0]][element[1]]= mapField.maze[element[0]][element[1]];
    });
  }

  module.exports = displayHoles;