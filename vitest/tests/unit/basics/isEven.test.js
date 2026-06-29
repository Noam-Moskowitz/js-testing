import {describe,it,expect} from 'vitest'
import { isEven } from '../../../src/basics/isEven'


describe('isEven',()=>{
    it('should return true if arg is even',()=>{
        expect(isEven(2)).toBeTruthy()
        expect(isEven(3)).toBeFalsy()
    })
})