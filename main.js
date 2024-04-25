const prompt = require('prompt-sync')({sigint: true});
const {hat, hole, fieldCharacter, pathCharacter} = require('./modules/mazeChars.js');
const mazeMapper = require('./modules/mazeMapper.js');
const mazePrinter = require('./modules/mazePrinter.js');


class Field {
    constructor(row,col){
      this.field = mazeMapper(row,col);
      this.maze = this.field.maze;
      this.hatLoc = this.field.currentLoc;
    }
  }

  const testField = new Field(3,4);



mazePrinter(testField.maze);