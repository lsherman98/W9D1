
class GameView {
    constructor(game, ctx) {
        this.game = game
        this.ctx = ctx
    }

    start() {
        return setInterval(() => {
            this.game.moveObjects()
            this.game.draw(this.ctx)
        }, 20)
    }
}

export default GameView