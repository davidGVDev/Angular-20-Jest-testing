import { describe, test, expect } from '@jest/globals';
import { MathUtils } from './math-utils';

describe('MathUtils', () => {
  describe('sum', () => {
    test('should add two positive numbers correctly', () => {
      const a = 5;
      const b = 3;
      const result = MathUtils.sum(a, b);
      expect(result).toBe(8);
    });
    test('should add negative numbers correctly', () => {
      expect(MathUtils.sum(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(MathUtils.sum(5, -3)).toBe(2);
    });

    test('should add zero correctly', () => {
      expect(MathUtils.sum(5, 0)).toBe(5);
    });
  });
  describe('subtract', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(MathUtils.subtract(5, 3)).toBe(2);
    });
  });
  describe('multiply', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(MathUtils.multiply(5, 3)).toBe(15);
    });
  });
  describe('divide', () => {
    test('should divide two positive numbers correctly', () => {
      expect(MathUtils.divide(5, 3)).toBe(1.6666666666666667);
    });
    test('should throw error when dividing by zero', () => {
      expect(() => MathUtils.divide(5, 0)).toThrow('Cannot divide by zero');
    });
  });
});
