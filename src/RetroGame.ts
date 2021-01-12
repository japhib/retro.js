import RetroCanvas from "./RetroCanvas"

const TARGET_FPS = 30
const FPS_INTERVAL = 1 / TARGET_FPS

export default class RetroGame {
    c: RetroCanvas

    lastFrame: number // timestamp of last frame, for calculating fps

    constructor(canvas: HTMLCanvasElement) {
        if (canvas == null) {
            canvas = document.createElement('canvas')
            canvas.id = 'retro-js'
            document.body.appendChild(canvas)
        }

        this.c = new RetroCanvas(canvas, 128, 128)
        this.lastFrame = 0
    }

    async start() {
        await this.load()

        window.requestAnimationFrame(this.frame.bind(this))
    }

    frame() {
        let now = Date.now()
        let elapsed = now - this.lastFrame

        // if enough time has passed, actually run a frame
        if (elapsed > FPS_INTERVAL) {
            this.update()
            this.draw()
            this.c.render()

            this.lastFrame = now
        }

        // request another frame
        window.requestAnimationFrame(this.frame.bind(this))
    }

    // functions to be overridden
    async load() {}
    init() {}
    update() {}
    draw() {}
}