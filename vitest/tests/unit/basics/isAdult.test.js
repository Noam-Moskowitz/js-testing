import {describe,it,expect} from'vitest'
import { isAdult } from '../../../src/basics/isAdult'


describe('isAdult',()=>{
    it.each([
        {age:19,expected:true},
        {age:18,expected:true},
        {age:17,expected:false},
        {age:10,expected:false},
    ])('should return $expected for age $age',({age,expected})=>expect(isAdult(age)).toBe(expected))
})