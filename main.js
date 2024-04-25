const prompt = require("prompt-sync")({ sigint: true });
const {
  hat,
  hole,
  fieldCharacter,
  pathCharacter,
} = require("./modules/mazeChars.js");
const mazeMapper = require("./modules/mazeMapper.js");
const mazePrinter = require("./modules/mazePrinter.js");
const addTraps = require("./modules/addTraps.js");
const findFieldIndices = require("./modules/fieldIndicies.js")

class Field {
  constructor(row, col) {
    this.field = mazeMapper(row, col);
    this.maze = this.field.maze;
    this.hatLoc = this.field.currentLoc;
    this.fieldIndices = this.findFieldIndices();
    this.addTraps();
  }

  addTraps(){
    addTraps(this.maze, Math.floor(this.maze.length*.2),this.fieldIndices);
    console.log("Traps Added.")
  }

  addDeadEnd(){

  }

   findFieldIndices() {

    return findFieldIndices(this.maze);
  }

}

const testField = new Field(20, 6);

mazePrinter(testField.maze);
