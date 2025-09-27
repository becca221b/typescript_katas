import { describe, test, expect } from "vitest";
import { toRoman } from "./romanNumbers.js";

describe('toRoman', () => {
    test('deberia convertir numeros a numeros romanos del 1 al 3', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(2)).toBe('II');
        expect(toRoman(3)).toBe('III');
    });
    test('debería devolver V cuando el número es 5', () => {
        expect(toRoman(5)).toBe('V');
    });
    test('debería devolver los numeros romanos del 6 al 7', () => {
        expect(toRoman(6)).toBe('VI');
        expect(toRoman(7)).toBe('VII');
    });
    test('debería reconocer el 1, el 5 y el 10 en numeros romanos', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(5)).toBe('V');
        expect(toRoman(10)).toBe('');
    })
});
