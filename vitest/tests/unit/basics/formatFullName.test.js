import {describe,it,expect} from 'vitest'
import { formatFullName } from '../../../src/basics/formatFullName'

describe('formatFullName',()=>{
    const EXPECTED_RESULT='John Doe'
    


    it('should return first name before last name',()=>{
        expect(formatFullName('John','Doe')).toBe(EXPECTED_RESULT)
        expect(formatFullName('John','Doe')).not.toBe('Doe John')
    })

    it('should remove all whitespace from first or last name',()=>{
        expect(formatFullName('John   ','Doe')).toBe(EXPECTED_RESULT)
        expect(formatFullName('  John   ','  Doe    ')).toBe(EXPECTED_RESULT)
    })

    it('should always return a string',()=>{
        expect(formatFullName('John','Doe')).toBeTypeOf('string')
        expect(formatFullName('','')).toBeTypeOf('string')
    })
})