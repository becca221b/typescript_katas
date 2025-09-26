import {describe, expect, test} from 'vitest';
import {suma} from './suma.js';

describe('suma', () => {
    test('suma de dos numeros positivos', () => {
        const result = suma("1,2,3");
        expect(result).toBe(6);
    });
    test('suma de dos numeros negativos', () => {
        const result = suma("-2, -3");
        expect(result).toBe(-5);
    });
    test('suma de un numero positivo y uno negativo', () => {
        const result = suma("5, -3");
        expect(result).toBe(2);
    });
    test('suma de un numero y cero', () => {
        const result = suma("7, 0");
        expect(result).toBe(7);
    });
    test('suma de dos numeros decimales',() => {
        const result = suma("2.5, 3");
        expect(result).toBe(5.5); 
    });
    test('suma con varios delimitadores', () => {
        const result = suma("1: 2 3;4");
        expect(result).toBe(10);
    });
    test('suma con espacios adicionales', () => {
        const result = suma(" 1 ,   2 , 3 ");
        expect(result).toBe(6);
    });
    
});