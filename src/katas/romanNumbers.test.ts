import { describe, test, expect } from "vitest";
import { toRoman, getDigit } from "./romanNumbers.js";

describe('getDigit', () => {
    test('deberia retornar el digito en la posición indicada en el segundo parametro', () => {
        expect(getDigit(200,2)).toBe(2);
        expect(getDigit(456,1)).toBe(5);
        expect(getDigit(1789,3)).toBe(1);
    });
});
describe('toRoman', () => {
    test('toRoman deberia convertir el número 1 al 3 en numeros romanos', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(2)).toBe('II');
        expect(toRoman(3)).toBe('III');
        
    });
});

describe('toRoman', () => {
    test('toRoman deberia convertir numeros arábigos a romanos del 1 al 8', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(2)).toBe('II');
        expect(toRoman(3)).toBe('III');
        expect(toRoman(4)).toBe('IV');
        expect(toRoman(5)).toBe('V');
        expect(toRoman(6)).toBe('VI');
        expect(toRoman(7)).toBe('VII');
        expect(toRoman(8)).toBe('VIII');
        //expect(toRoman(9)).toBe('IX');
        //expect(toRoman(10)).toBe('X');
    });
});
