import MovingObject from "./moving-object.js";

class Bullet extends MovingObject {
  constructor(options) {
    options.radius = Bullet.RADIUS;
    super(options);
    this.isWrappable = false;
  }

  static RADIUS = 2;
  static SPEED = 15;
}

export default Bullet;
