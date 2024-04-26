class Player {
  constructor() {
    this._direction = "F";
    this._health = 100;
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

  reduceHealth(damage){
    this._health-=damage;
    console.log(`Health reduced by ${damage} to ${this._health}`);
  }

  hitHole(){
    this._health=0;
  }

  hitWall(){
    this.reduceHealth(5);
    
  }

}

module.exports = Player;