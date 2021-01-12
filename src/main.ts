import Pico8Colors from './Pico8Colors'
import RetroGame from './RetroGame'

class Game extends RetroGame {
    draw() {
        this.c.cls(Pico8Colors[1])
        for (let x = 0; x < 128; x++) {
            for (let y = 0; y < 128; y++) {
                let color = Math.floor((x + y) / 16 + (Date.now() / 1000)) % 16
                this.c.pset(x, y, Pico8Colors[color])
            }
        }

        this.c.line(127, 0, 0, 127, Pico8Colors[12])
    }
}

let g = new Game(null)
g.start()