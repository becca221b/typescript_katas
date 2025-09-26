import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizzBuzz.js";

describe('fizzBuzz', () => {
    test('deberia retornar Fizz para multiplos de 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
        expect(fizzBuzz(9)).toBe('Fizz');
    });
});
describe('fizzBuzz', () => {
    test('deberia retornar Buzz para multiplos de 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
        expect(fizzBuzz(20)).toBe('Buzz');
    });
});
describe('fizzBuzz', () => {
    test('deberia retornar FizzBuzz para multiplos de 3 y 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    });
});
describe('fizzBuzz', () => {
    test('deberia retornar el numero para numeros que no son multiplos de 3 o 5', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
        expect(fizzBuzz(4)).toBe(4);
    });
});
describe('fizzBuzz', () => {
    test('deberia retornar el numero para numeros negativos que no son multiplos de 3 o 5', () => {
        expect(fizzBuzz(-1)).toBe(-1);
        expect(fizzBuzz(-2)).toBe(-2);
        expect(fizzBuzz(-4)).toBe(-4);
    });
});
describe('fizzBuzz', () => {
    test('deberia retornar Fizz para multiplos negativos de 3', () => {
        expect(fizzBuzz(-3)).toBe('Fizz');
        expect(fizzBuzz(-6)).toBe('Fizz');
        expect(fizzBuzz(-9)).toBe('Fizz');
    });
});
describe('fizzBuzz', () => {
    test('debería retornar el número para numeros decimales que no son multiplos de 3 o 5', () => {
        expect(fizzBuzz(1.5)).toBe(1.5);
        expect(fizzBuzz(2.7)).toBe(2.7);
        expect(fizzBuzz(4.1)).toBe(4.1);
    });
});