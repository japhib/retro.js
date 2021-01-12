import Pico8Colors from './Pico8Colors'
import RetroCanvas from './RetroCanvas'

let canvas = document.createElement('canvas')
canvas.id = 'retro-js'

document.body.appendChild(canvas)

let retroCanvas = new RetroCanvas(canvas, 128, 128)

retroCanvas.cls(Pico8Colors[1])

for (let x = 0; x < 128; x++) {
    for (let y = 0; y < 128; y++) {
        let color = Math.floor((x + y) / 16)
        retroCanvas.pset(x, y, Pico8Colors[color])
    }
}

retroCanvas.line(127, 0, 0, 127, Pico8Colors[12])

retroCanvas.render()