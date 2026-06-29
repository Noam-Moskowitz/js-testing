import {describe,it,expect} from'vitest'
import { removeDuplicates } from '../../../src/basics/removeDuplicates'


describe('removeDuplicates',()=>{
    it('returns an array where all duplicates are removed',()=>{
        expect(removeDuplicates(['1','1','2'])).toEqual(['1','2'])
        expect(removeDuplicates(['1','2'])).toEqual(['1','2'])
        expect(removeDuplicates(['1','2','2'])).toEqual(['1','2'])
        expect(removeDuplicates([1,1,2])).toEqual([1,2])
        expect(removeDuplicates([1,1,1,1,1,1])).toEqual([1])
    })

    it('returns an empty array if passed one',()=>expect(removeDuplicates([])).toEqual([]))

    it('always returns an array',()=>{
        expect(removeDuplicates([])).toBeInstanceOf(Array)
        expect(removeDuplicates([1])).toBeInstanceOf(Array)
        expect(removeDuplicates([1,2])).toBeInstanceOf(Array)
        expect(removeDuplicates(['2','1'])).toBeInstanceOf(Array)
    })
})