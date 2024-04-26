class Player {
  constructor() {
    this._direction = "F";
    this._health = 100;
    this._position = [0, 0];
  }

  get direction() {
    return this._direction;
  }

  get health() {
    return this._health;
  }

  /**
   * @param {string} direction
   */
  set direction(direction) {
    if (["F", "B", "L", "R"].has(direction)) {
      this._direction = direction;
    } else {
      console.log("enter 'F','B','L', or 'R'");
    }
  }

  reduceHealth(damage) {
    this._health -= damage;
    console.log(`Health reduced by ${damage} to ${this._health}`);
  }

  hitHole() {
    this._health = 0;
  }

  hitWall() {
    this.reduceHealth(5);
  }

  checkOutOfBounds(){
    const row = this._position[0];
    const col = this._position[1];
    return (row<0 || col<0);

  }

  move(moveDirection) {

    const row = this._position[0];
    const col = this._position[1];
    switch (moveDirection) {
      case "forward":
        if (this._direction === "B") {
          this._position[0] = row - 1;
        } else if ((this._direction = "F")) {
          this._position[0] = row + 1;
        } else if ((this._direction = "R")) {
          this._position[1] = col + 1;
        } else {
          this._position[1] = col - 1;
        }
        break;
      case "backward":
        if (this._direction === "B") {
          this._position[0] = row + 1;
          this._direction = "F";
        } else if ((this._direction = "F")) {
          this._position[0] = row - 1;
          this._direction = "B";
        } else if ((this._direction = "R")) {
          this._position[1] = col - 1;
          this._direction = "L";
        } else {
          this._position[1] = col + 1;
          this._direction = "R";
        }
        break;
      case "right":
        if (this._direction === "B") {
          this._position[1] = col - 1;
          this._direction = "R";
        } else if ((this._direction = "F")) {
          this._position[1] = col + 1;
          this._direction = "L";
        } else if ((this._direction = "R")) {
          this._position[0] = row + 1;
          this._direction = "F";
        } else {
          this._position[0] = row - 1;
          this._direction = "B";
        }
        break;
      case "left":
        if (this._direction === "B") {
          this._position[1] = col + 1;
          this._direction = "L";
        } else if ((this._direction = "F")) {
          this._position[1] = col - 1;
          this._direction = "R";
        } else if ((this._direction = "R")) {
          this._position[0] = row - 1;
          this._direction = "B";
        } else {
          this._position[0] = row + 1;
          this._direction = "F";
        }
        break;
      default:
        console.log("Enter 'forward', 'backward', 'left', 'right'");
        return null;
    }

  }
}

module.exports = Player;
