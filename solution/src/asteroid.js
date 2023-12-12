import * as Util from "./util.js";
import MovingObject from "./moving-object.js";
import Ship from "./ship.js";
import Bullet from "./bullet.js";

class Asteroid extends MovingObject {
  constructor(options = {}) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel || Util.randomVec(Asteroid.SPEED);
    super(options);
  }

  static COLOR = "#505050";
  static RADIUS = 25;
  static SPEED = 4;

  collideWith(otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
      return true;
    } else if (otherObject instanceof Bullet) {
      this.remove();
      otherObject.remove();
      return true;
    }

    return false;
  }
}

export default Asteroid;
