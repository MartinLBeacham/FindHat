const {
    hat,
    hole,
    fieldCharacter,
    pathCharacter,
  } = require("./mazeChars.js");
  const mazeMapper = require("./mazeMapper.js");
  const mazePrinter = require("./mazePrinter.js");
  const addTraps = require("./addTraps.js");
  const findFieldIndices = require("./fieldIndicies.js");
  const addDeadEnd = require("./addDeadEnd.js");
  const blankField = require("./blankMaze.js");
  const displayHoles = require("./displayHoles.js");

  class Field {
    constructor(rows, cols) {
      this._rows = rows;
      this._cols = cols;
      this.field = mazeMapper(rows, cols);
      this.maze = this.field.maze;
      this.hatLoc = this.field.currentLoc;
      this.fieldIndices = this.findFieldIndices();
      this._holeLocs = this.addTraps();
      this.addDeadEnd();
    }
  
    addTraps(){
      return addTraps(this.maze, Math.floor(this.maze.length*this.maze[0].length*.1),this.fieldIndices);
      }
  
    addDeadEnd(){
      
      let deadEndNum = Math.floor(this.maze.length*this.maze[0].length*.3);
      addDeadEnd(this.maze, deadEndNum, this.fieldIndices);
    }
  
     findFieldIndices() {
  
      return findFieldIndices(this.maze);
    }
  
    static mazePrinter(maze){
        mazePrinter(maze);
    }

    static blankField(rows, cols){
        return blankField(rows, cols);
    }

    static displayHoles(displayField, mapField){

        displayHoles(displayField, mapField);
    }

    get rows(){
        return this._rows;
    }

    get cols(){
        return this._cols;
    }

    get holeLocs(){
        return this._holeLocs;
    }

  }

module.exports = Field;