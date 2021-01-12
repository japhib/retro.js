import PixelImage, * as PixelImageConstants from './PixelImage'
import * as Color from './Color'

export default class RetroCanvas {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    backbuffer: PixelImage

    scaling: number
    displayImgData: PixelImage

    constructor(canvas: HTMLCanvasElement, width: number, height: number) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.backbuffer = new PixelImage(this.context, width, height)

        this.resizeBackbuffer()
    }

    resizeBackbuffer() {
        this.scaling = Math.min(
            Math.floor(this.canvas.width / this.backbuffer.width),
            Math.floor(this.canvas.height / this.backbuffer.height))

        this.displayImgData = new PixelImage(this.context, this.backbuffer.width * this.scaling, this.backbuffer.height * this.scaling)
    }

    render() {
        this.displayImgData.clear(0)

        for (let x = 0; x < this.backbuffer.width; x++) {
            for (let y = 0; y < this.backbuffer.height; y++) {
                let {r, g, b} = this.backbuffer.getPixel(x, y)

                for (let xx = 0; xx < this.scaling; xx++) {
                    for (let yy = 0; yy < this.scaling; yy++) {
                        this.displayImgData.setPixel(x*this.scaling + xx, y*this.scaling + yy, r, g, b)
                    }
                }
            }
        }

        // clear canvas
        this.context.fillStyle = 'rgb(0, 0, 0)'
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

        // draw scaled image to canvas
        this.context.putImageData(this.displayImgData.img, 0, 0)
    }

    clear(color: number) {
        this.backbuffer.clear(color)
    }

    line(x0: number, y0: number, x1: number, y1: number, color: number) {
        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx - dy;

        let {r, g, b} = Color.getAllComponents(color)
     
        while(true) {
           this.backbuffer.setPixel(x0, y0, r, g, b)
     
           if ((x0 === x1) && (y0 === y1)) break;
           var e2 = 2*err;
           if (e2 > -dy) { err -= dy; x0  += sx; }
           if (e2 < dx) { err += dx; y0  += sy; }
        }
    }
}