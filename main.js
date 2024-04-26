const prompt = require("prompt-sync")({ sigint: true });
const Field = require("./modules/field.js")

const testField = new Field(20, 10);

const displayField = Field.blankField(testField.rows, testField.cols)

Field.mazePrinter(testField.maze);
