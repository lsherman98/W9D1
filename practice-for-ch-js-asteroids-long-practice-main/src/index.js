import Game from "./game.js"
import GameView from "./gameview.js"

const canvas = document.getElementById("game-canvas")
const context = canvas.getContext('2d');
canvas.height = Game.DIM_X
canvas.width = Game.DIM_Y



const game = new Game()
new GameView(game, context).start()

