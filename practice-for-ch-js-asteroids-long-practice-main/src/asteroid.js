import MovingObject from "./moving-object";
import * as Util from "./util.js"

class Asteroid extends MovingObject {
    static RADIUS = 25
    static COLOR = "#00FF00"

    constructor(optionsObj) {
        optionsObj.color = Asteroid.color
        optionsObj.radius = Asteroid.RADIUS
        optionsObj.vec = Util.randomVec()
        super(optionsObj)
    }
}

export default Asteroid