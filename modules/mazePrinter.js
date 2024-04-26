function mazePrinter(maze) {
  const padding = "⬛".repeat(maze[0].length+2);
  console.log(padding);
  maze.forEach((row) => console.log("⬛" + row.join("") + "⬛"));
  console.log(padding);
}

module.exports = mazePrinter;
