import { describe, test, expect } from '@jest/globals';
import { NumberUtils } from './number-utils';

describe('NumberUtils', () => {
  describe('isEven', () => {
    test('should return true for even number', () => {
      expect(NumberUtils.isEven(2)).toBe(true);
    });
    test('should return false for odd number', () => {
      expect(NumberUtils.isEven(3)).toBe(false);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isEven('a')).toBe(false);
    });
    test('should return true for zero', () => {
      expect(NumberUtils.isEven(0)).toBe(true);
    });
  });
  describe('isOdd', () => {
    test('should return true for odd number', () => {
      expect(NumberUtils.isOdd(3)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isOdd('a')).toBe(false);
    });
    test('should return false for even number', () => {
      expect(NumberUtils.isOdd(2)).toBe(false);
    });
    test('should return false for zero', () => {
      expect(NumberUtils.isOdd(0)).toBe(false);
    });
  });
  describe('isPrime', () => {
    test('should return true for prime number', () => {
      expect(NumberUtils.isPrime(7)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isPrime('a')).toBe(false);
    });
    test('should return false for negative number', () => {
      expect(NumberUtils.isPrime(-7)).toBe(false);
    });
    test('should return false for zero', () => {
      expect(NumberUtils.isPrime(0)).toBe(false);
    });
  });
  describe('isPositive', () => {
    test('should return true for positive number', () => {
      expect(NumberUtils.isPositive(10)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isPositive('a')).toBe(false);
    });
    test('should return false for negative number', () => {
      expect(NumberUtils.isPositive(-10)).toBe(false);
    });
    test('should return false for zero', () => {
      expect(NumberUtils.isPositive(0)).toBe(false);
    });
  });
  describe('isNegative', () => {
    test('should return true for negative number', () => {
      expect(NumberUtils.isNegative(-10)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isNegative('a')).toBe(false);
    });
    test('should return false for positive number', () => {
      expect(NumberUtils.isNegative(10)).toBe(false);
    });
    test('should return false for zero', () => {
      expect(NumberUtils.isNegative(0)).toBe(false);
    });
  });
  describe('isInteger', () => {
    test('should return true for integer', () => {
      expect(NumberUtils.isInteger(10)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isInteger('a')).toBe(false);
    });
    test('should return false for float', () => {
      expect(NumberUtils.isInteger(10.5)).toBe(false);
    });
    test('should return true for zero', () => {
      expect(NumberUtils.isInteger(0)).toBe(true);
    });
  });
  describe('isFloat', () => {
    test('should return true for float', () => {
      expect(NumberUtils.isFloat(10.5)).toBe(true);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.isFloat('a')).toBe(false);
    });
    test('should return false for integer', () => {
      expect(NumberUtils.isFloat(10)).toBe(false);
    });
    test('should return false for zero', () => {
      expect(NumberUtils.isFloat(0)).toBe(false);
    });
  });
  describe('round', () => {
    test('should round number to nearest integer', () => {
      expect(NumberUtils.round(10.5)).toBe(11);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.round('a')).toBe(false);
    });
    test('should round negative number to nearest integer', () => {
      expect(NumberUtils.round(-10.5)).toBe(-10);
    });
    test('should return 0 for zero', () => {
      expect(NumberUtils.round(0)).toBe(0);
    });
    test('should round down when decimal is less than 0.5', () => {
      expect(NumberUtils.round(10.4)).toBe(10);
    });
  });
  describe('clamp', () => {
    test('should clamp number between min and max', () => {
      expect(NumberUtils.clamp(10, 5, 15)).toBe(10);
    });
    test('should return false for non-number', () => {
      expect(NumberUtils.clamp('a', 5, 15)).toBe(false);
    });
    test('should return min when number is below min (negative)', () => {
      expect(NumberUtils.clamp(-10, 5, 15)).toBe(5);
    });
    test('should return min value for zero', () => {
      expect(NumberUtils.clamp(0, 5, 15)).toBe(5);
    });
    test('should return min when number is below min (positive)', () => {
      expect(NumberUtils.clamp(3, 5, 15)).toBe(5);
    });
    test('should return max when number is above max', () => {
      expect(NumberUtils.clamp(20, 5, 15)).toBe(15);
    });
    test('should return number when it equals min', () => {
      expect(NumberUtils.clamp(5, 5, 15)).toBe(5);
    });
    test('should return number when it equals max', () => {
      expect(NumberUtils.clamp(15, 5, 15)).toBe(15);
    });
  });
});
