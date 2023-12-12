class MovingObject {
    constructor(newMovingObject) {
        this.pos = newMovingObject.pos
        this.vel = newMovingObject.vel 
        this.radius = newMovingObject.radius
        this.color = newMovingObject.color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
        ctx.fill()
    }

    move() {
        this.pos[0] += this.vel[0]
        this.pos[1] += this.vel[1]
    }
}

export default MovingObject

