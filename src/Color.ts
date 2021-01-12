type ColorStruct = {
    r: number,
    g: number,
    b: number,
    a?: number,
}

export function getRedComponent(color: number) {
    return 0xff & (color >> 16)
}

export function getGreenComponent(color: number) {
    return 0xff & (color >> 8)
}

export function getBlueComponent(color: number) {
    return 0xff & color
}

export function getAlphaComponent(color: number) {
    return 0xff & (color >> 24)
}

export function getAllComponents(color: number) {
    return {
        r: getRedComponent(color),
        g: getGreenComponent(color),
        b: getBlueComponent(color),
        a: getAlphaComponent(color)
    }
}

export function pack(color: ColorStruct) {
    let {r, g, b, a} = color
    
    let ret = 0
    ret += b
    ret += g << 8
    ret += r << 16
    ret += a << 24

    return ret
}
