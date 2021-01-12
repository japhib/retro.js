import RetroCanvas from './RetroCanvas'

let canvas = document.createElement('canvas')
canvas.id = 'retro-js'

document.body.appendChild(canvas)

let retroCanvas = new RetroCanvas(canvas, 128, 128)

retroCanvas.clear(0xcccccc)

retroCanvas.line(127, 0, 0, 127, 0x0000ff)

retroCanvas.render()