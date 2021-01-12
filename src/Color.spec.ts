import * as Color from './Color'

describe('Color', () => {
    it('extracts the r, g, b and a components properly', () => {
        let testColor = 0x12345678
        
        expect(Color.getRedComponent(testColor)).toEqual(0x34)
        expect(Color.getGreenComponent(testColor)).toEqual(0x56)
        expect(Color.getBlueComponent(testColor)).toEqual(0x78)
        expect(Color.getAlphaComponent(testColor)).toEqual(0x12)
    })
})
