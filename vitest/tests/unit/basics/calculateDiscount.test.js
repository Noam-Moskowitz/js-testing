import {describe,it,expect} from 'vitest'
import { isEven } from '../../../src/basics/isEven'
import { calculateDiscount } from '../../../src/basics/calculateDiscount'


describe('calculateDiscount',()=>{
    it('should deduct the percentage from the price',()=>{
     expect(calculateDiscount(100,10)).toBe(90)
     expect(calculateDiscount(100,50)).toBe(50)
    })

    it('should not deduct if percentage is zero',()=>{
     expect(calculateDiscount(100,0)).toBe(100)
    });
})