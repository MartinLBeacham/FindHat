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
  
  class Field {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.field = mazeMapper(rows, cols);
      this.maze = this.field.maze;
      this.hatLoc = this.field.currentLoc;
      this.fieldIndices = this.findFieldIndices();
      this.addTraps();
      this.addDeadEnd();
    }
  
    addTraps(){
      addTraps(this.maze, Math.floor(this.maze.length*this.maze[0].length*.1),this.fieldIndices);
      console.log("Traps Added.")
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

    static blankField(){
        return blankField(rows, cols);
    }

    get rows(){
        return this.rows;
    }

    get cols(){
        return this.cols;
    }

  }

module.exports = Field;