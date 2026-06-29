import {describe,it,expect} from'vitest'
import { sumArray } from '../../../src/basics/sumArray'

describe('sumArray',()=>{

    it('return sum of all items in array',()=>{

        expect(sumArray([1,1,1,1])).toBe(4)
        expect(sumArray([2,2])).toBe(4)
        expect(sumArray([2])).toBe(2)
    })

    it('handles negative numbers correctly',()=>{
        expect(sumArray([1,1,-1,-1])).toBe(0)
        expect(sumArray([-1,-1,-1,-1])).toBe(-4)
        expect(sumArray([2,2,2,-1])).toBe(5)
    })

    it('returns zero when passed an empty array',()=>{
        expect(sumArray([])).toBe(0)
    })
})