import Asteroid from "./asteroid"

class Game {
    static DIM_X = 1000
    static DIM_Y = 600
    static NUM_ASTEROIDS = 10
    

    constructor() {
        this.asteroids = []

        this.addAsteroids()
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid({
                pos: this.randomPosition(),
                vel: [10, 10],
                radius: 5,
                color: "#00FF00"
            }))
        }
    }

    randomPosition() {
        return [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()]
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
        this.asteroids.forEach(asteroid => asteroid.draw(ctx))
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => asteroid.move())
    }
}

export default Game