import { describe, test, expect } from '@jest/globals';
import { CalculatorService } from './calculator';

describe('CalculatorService', () => {
  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(CalculatorService.add(1, 2)).toBe(3);
    });
    test('should add two negative numbers correctly', () => {
      expect(CalculatorService.add(-1, -2)).toBe(-3);
    });
    test('should add a positive and a negative number correctly', () => {
      expect(CalculatorService.add(1, -2)).toBe(-1);
    });
    test('should add zero correctly', () => {
      expect(CalculatorService.add(0, 0)).toBe(0);
    });
    test('should add decimal numbers correctly', () => {
      expect(CalculatorService.add(1.5, 2.5)).toBe(4);
    });
  });
  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      expect(CalculatorService.subtract(1, 2)).toBe(-1);
    });
    test('should subtract two negative numbers correctly', () => {
      expect(CalculatorService.subtract(-1, -2)).toBe(1);
    });
    test('should subtract a positive and a negative number correctly', () => {
      expect(CalculatorService.subtract(1, -2)).toBe(3);
    });
    test('should subtract decimal numbers correctly', () => {
      expect(CalculatorService.subtract(1.5, 2.5)).toBe(-1);
    });
    test('should subtract zero correctly', () => {
      expect(CalculatorService.subtract(0, 0)).toBe(0);
    });
    test('should subtract zero and number correctly', () => {
      expect(CalculatorService.subtract(0, 1)).toBe(-1);
    });
    test('should subtract number and zero correctly', () => {
      expect(CalculatorService.subtract(1, 0)).toBe(1);
    });
  });
  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      expect(CalculatorService.multiply(1, 2)).toBe(2);
    });
    test('should multiply two negative numbers correctly', () => {
      expect(CalculatorService.multiply(-1, -2)).toBe(2);
    });
    test('should multiply a positive and a negative number correctly', () => {
      expect(CalculatorService.multiply(1, -2)).toBe(-2);
    });
    test('should multiply decimal numbers correctly', () => {
      expect(CalculatorService.multiply(1.5, 2.5)).toBe(3.75);
    });
    test('should multiply zero correctly', () => {
      expect(CalculatorService.multiply(0, 0)).toBe(0);
    });
    test('should multiply zero and number correctly', () => {
      expect(CalculatorService.multiply(0, 1)).toBe(0);
    });
    test('should multiply number and zero correctly', () => {
      expect(CalculatorService.multiply(1, 0)).toBe(0);
    });
    test('should multiply by 1 correctly', () => {
      expect(CalculatorService.multiply(1, 10)).toBe(10);
    });
  });
  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(CalculatorService.divide(1, 2)).toBe(0.5);
    });
    test('should divide two negative numbers correctly', () => {
      expect(CalculatorService.divide(-1, -2)).toBe(0.5);
    });
    test('should divide a positive and a negative number correctly', () => {
      expect(CalculatorService.divide(1, -2)).toBe(-0.5);
    });
    test('should divide decimal numbers correctly', () => {
      expect(CalculatorService.divide(1.5, 2.5)).toBe(0.6);
    });
    test('should divide zero by number correctly', () => {
      expect(CalculatorService.divide(0, 1)).toBe(0);
    });
    test('should divide number by zero correctly', () => {
      expect(() => CalculatorService.divide(1, 0)).toThrow('Cannot divide by zero');
    });
    test('should divide zero by zero correctly', () => {
      expect(() => CalculatorService.divide(0, 0)).toThrow('Cannot divide by zero');
    });
  });
  describe('power', () => {
    test('should raise a number to the power of another number correctly', () => {
      expect(CalculatorService.power(2, 3)).toBe(8);
    });
    test('should raise a negative number to the power of another number correctly', () => {
      expect(CalculatorService.power(-2, 3)).toBe(-8);
    });
    test('should raise a decimal number to the power of another number correctly', () => {
      expect(CalculatorService.power(1.5, 2.5)).toBe(2.7556759606310752);
    });
    test('should raise zero to the power of another number correctly', () => {
      expect(CalculatorService.power(0, 1)).toBe(0);
    });
    test('should raise number to the power of zero correctly', () => {
      expect(CalculatorService.power(1, 0)).toBe(1);
    });
    test('should raise number to the power of negative number correctly', () => {
      expect(CalculatorService.power(2, -3)).toBe(0.125);
    });
    test('should raise number to the power of decimal number correctly', () => {
      expect(CalculatorService.power(2, 1.5)).toBe(2.82842712474619);
    });
    test('should raise negative number to even power correctly', () => {
      expect(CalculatorService.power(-2, 2)).toBe(4);
    });
  });
  describe('squareRoot', () => {
    test('should return the square root of a number correctly', () => {
      expect(CalculatorService.squareRoot(4)).toBe(2);
    });
    test('should return the square root of a negative number correctly', () => {
      expect(CalculatorService.squareRoot(-4)).toBeNaN();
    });
    test('should return the square root of a decimal number correctly', () => {
      expect(CalculatorService.squareRoot(1.5)).toBe(1.224744871391589);
    });
    test('should return the square root of zero correctly', () => {
      expect(CalculatorService.squareRoot(0)).toBe(0);
    });
  });
  describe('percentage', () => {
    test('should return the percentage of a number correctly', () => {
      expect(CalculatorService.percentage(100, 10)).toBe(10);
    });
    test('should return the percentage of a negative number correctly', () => {
      expect(CalculatorService.percentage(-100, 10)).toBe(-10);
    });
    test('should return the percentage of a decimal number correctly', () => {
      expect(CalculatorService.percentage(100, 10.5)).toBe(10.5);
    });
    test('should return the percentage of zero correctly', () => {
      expect(CalculatorService.percentage(0, 10)).toBe(0);
    });
    test('should return the percentage of 110% correctly', () => {
      expect(CalculatorService.percentage(100, 110)).toBe(110);
    });
  });
  describe('modulo', () => {
    test('should return the modulo of a number correctly', () => {
      expect(CalculatorService.modulo(10, 3)).toBe(1);
    });
    test('should return the modulo of a negative number correctly', () => {
      expect(CalculatorService.modulo(-10, 3)).toBe(-1);
    });
    test('should return the modulo of a decimal number correctly', () => {
      expect(CalculatorService.modulo(10, 1.5)).toBe(1);
    });
    test('should return the modulo of two negative numbers correctly', () => {
      expect(CalculatorService.modulo(-10, -3)).toBe(-1);
    });
    test('should return the modulo of zero by number correctly', () => {
      expect(CalculatorService.modulo(0, 1)).toBe(0);
    });
    test('should return the modulo of number by zero correctly', () => {
      expect(() => CalculatorService.modulo(1, 0)).toThrow('Cannot divide by zero');
    });
    test('should return the modulo of zero by zero correctly', () => {
      expect(() => CalculatorService.modulo(0, 0)).toThrow('Cannot divide by zero');
    });
  });
});
