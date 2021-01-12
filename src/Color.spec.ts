import * as Color from './Color'

describe('Color', () => {
    it('extracts the r, g, b and a components properly', () => {
        let testColor = 0x12345678
        
        expect(Color.getRedComponent(testColor)).toEqual(0x34)
        expect(Color.getGreenComponent(testColor)).toEqual(0x56)
        expect(Color.getBlueComponent(testColor)).toEqual(0x78)
        expect(Color.getAlphaComponent(testColor)).toEqual(0x12)
    })

    it('packs the components properly back into a number', () => {
        let testColor = {
            r: 0x12,
            g: 0x34,
            b: 0x56,
            a: 0x78
        }

        expect(Color.pack(testColor)).toEqual(0x78123456)
    })
})
