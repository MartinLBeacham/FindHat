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

  checkOutOfBounds() {
    const row = this._position[0];
    const col = this._position[1];
    return row < 0 || col < 0;
  }

  move(moveDirection) {
    const row = this._position[0];
    const col = this._position[1];

    switch (moveDirection) {
      case "forward":
        this._position[0]++;
        break;
      case "backward":
        this._position[0]--;
        break;
      case "left":
        this._position[1]--;
        break;
      case "right":
        this._position[1]++;
        break;
    }

 }
}

module.exports = Player;
