import { getAllComponents } from "./Color"

export const RED_OFFSET = 0
export const GREEN_OFFSET = 1
export const BLUE_OFFSET = 2
export const ALPHA_OFFSET = 3
export const BYTES_PER_PIXEL = 4

export default class PixelImage {
    context: CanvasRenderingContext2D
    width: number
    height: number
    img: ImageData

    constructor(context: CanvasRenderingContext2D, width: number, height: number) {
        this.context = context
        this.width = width
        this.height = height
        this.img = context.createImageData(width, height)

        this.clear(0)
    }

    getPixelCoord(x: number, y: number) {
        return (y * (this.width * BYTES_PER_PIXEL)) + (x * BYTES_PER_PIXEL)
    }

    getPixel(x: number, y: number) {
        let coord = this.getPixelCoord(x, y)
        return {
            r: this.img.data[coord + RED_OFFSET],
            g: this.img.data[coord + GREEN_OFFSET],
            b: this.img.data[coord + BLUE_OFFSET]
        }
    }

    setPixel(x: number, y: number, r: number, g: number, b: number) {
        let coord = this.getPixelCoord(x, y)
        this.img.data.set([r, g, b, 0xff], coord)
    }

    clear(color: number) {
        let {r, g, b} = getAllComponents(color)
        // quickly clear every byte in the array to the color specified
        for (let i = 0; i < this.img.data.length; i += BYTES_PER_PIXEL) {
            this.img.data.set([r, g, b, 0xff], i)
        }
    }
}