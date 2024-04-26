const { hat, hole, fieldCharacter, pathCharacter } = require("./mazeChars.js");
const blankMaze = require("./blankMaze.js")

function pathLength(rows, cols) {
  const mazeArea = rows * cols;
  const minPathLen = 0.3125 * mazeArea;
  const maxPathLen = 0.5625 * mazeArea;

  let pathLen = Math.floor(Math.random() * mazeArea);
  pathLen = Math.min(Math.max(pathLen, minPathLen), maxPathLen);
  pathLen = Math.floor(pathLen);
  return pathLen;
}

function checkPaths(maze, currentLoc) {
  const availPaths = [];

  const row = currentLoc.row;
  const col = currentLoc.col;

  const goRight = [row, col - 1,"←"];
  const goLeft = [row, col + 1,"→"];
  const goForward = [row + 1, col,"↓"];
  const goBack = [row - 1, col,"↑"];

  if (goRight[1] != -1 && maze[goRight[0]][goRight[1]]===fieldCharacter) {
    availPaths.push(goRight);
  }

  if (goLeft[1] <= maze[row].length - 1 && maze[goLeft[0]][goLeft[1]]===fieldCharacter) {
    availPaths.push(goLeft);
  }

  if (goForward[0] <= maze.length - 1 && maze[goForward[0]][goForward[1]]===fieldCharacter) {
    availPaths.push(goForward);
  }

  if (goBack[0] >= 1 && maze[goBack[0]][goBack[1]]===fieldCharacter &&  row> maze.length/2) {
    availPaths.push(goBack);
  }

  return availPaths;
}

function mazeMapper(rows, cols) {
  const maze = blankMaze(rows, cols);

  const pathLen = pathLength(rows, cols);

  let currentLoc = { row: 0, col: 0 };
//   let prevLoc = {row: 0, col: 0}

  maze[0][0] = "&";

  for (pathNum = 1; pathNum <= pathLen; pathNum++) {
    // prevLoc = {row:currentLoc.row, col:currentLoc.col};
    const availPaths = checkPaths(maze, currentLoc);
    if (availPaths.length === 0 || pathNum === pathLen) {
      maze[currentLoc.row][currentLoc.col] = hat;
      return { maze, currentLoc };
    } else {
      const selectedPathLoc = Math.floor(Math.random() * availPaths.length);
    
      currentLoc.row = availPaths[selectedPathLoc][0];
      
      currentLoc.col = availPaths[selectedPathLoc][1];
    
      maze[currentLoc.row][currentLoc.col] = pathCharacter;
    // maze[prevLoc.row][prevLoc.col] = availPaths[selectedPathLoc][2];
    }
  }

  return { maze, currentLoc };
}

module.exports = mazeMapper;
