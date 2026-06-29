import {describe,it,expect}from'vitest'
import { canWithdraw } from '../../../src/basics/canWithdraw'

describe('canWithdraw',()=>{
    it('should be falsy if amount is 0 or lower',()=>{
        expect(canWithdraw(100,0)).toBeFalsy()
        expect(canWithdraw(100,-1)).toBeFalsy()
    })

    it('should be falsy if amount is greater than balance',()=>{
        expect(canWithdraw(100,101)).toBeFalsy()
        expect(canWithdraw(0,1)).toBeFalsy()
    })

    it('should be truthy if amount is greater than 0 AND is smaller than balance',()=>{
          expect(canWithdraw(10,1)).toBeTruthy()
          expect(canWithdraw(10,10)).toBeTruthy()
          expect(canWithdraw(10,11)).toBeFalsy()
          expect(canWithdraw(10,0)).toBeFalsy()
    })
})