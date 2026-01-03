import { describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { StringUtils } from './string-utils';

describe('StringUtils', () => {
  // Variables que se usarán en múltiples tests
  let testString: string;
  let emptyString: string;

  // beforeEach se ejecuta ANTES de cada test
  beforeEach(() => {
    testString = 'hello world';
    emptyString = '';
  });

  describe('capitalize', () => {
    test('should capitalize first letter of a string', () => {
      const input = 'hello';
      const result = StringUtils.capitalize(input);
      expect(result).toBe('Hello');
    });
    test('should handle empty string', () => {
      expect(StringUtils.capitalize('')).toBe('');
    });
    test('should handle already capitalized string', () => {
      expect(StringUtils.capitalize('Hello')).toBe('Hello');
    });
  });

  describe('reverse', () => {
    test('should reverse a string', () => {
      const input = 'hello';
      const result = StringUtils.reverse(input);
      expect(result).toBe('olleh');
    });

    test('should handle empty string', () => {
      expect(StringUtils.reverse('')).toBe('');
    });
  });

  describe('trim', () => {
    test('should trim leading and trailing spaces', () => {
      expect(StringUtils.trim('  hello  ')).toBe('hello');
    });
    test('should handle empty string', () => {
      expect(StringUtils.trim('')).toBe('');
    });
    test('should handle string with only spaces', () => {
      expect(StringUtils.trim('  ')).toBe('');
    });
  });

  describe('toCamelCase', () => {
    test('should convert string to camel case', () => {
      expect(StringUtils.toCamelCase('hello world')).toBe('helloWorld');
    });
    test('should handle empty string', () => {
      expect(StringUtils.toCamelCase('')).toBe('');
    });
    test('should handle string with only spaces', () => {
      expect(StringUtils.toCamelCase('  ')).toBe('');
    });
  });

  describe('isPalindrome', () => {
    test('should return true for palindrome string', () => {
      expect(StringUtils.isPalindrome('madam')).toBe(true);
    });
    test('should return false for non-palindrome string', () => {
      expect(StringUtils.isPalindrome('hello')).toBe(false);
    });
    test('should handle empty string', () => {
      expect(StringUtils.isPalindrome('')).toBe(false);
    });
  });

  describe('countWords', () => {
    test('should count words in a string', () => {
      expect(StringUtils.countWords('hello world')).toBe(2);
    });
    test('should handle empty string', () => {
      expect(StringUtils.countWords('')).toBe(0);
    });
    test('should handle string with only spaces', () => {
      expect(StringUtils.countWords('  ')).toBe(0);
    });
  });

  // afterEach se ejecuta después de CADA test
  afterEach(() => {
    // Limpiar si es necesario (ej: resetear mocks)
    console.log('Test completado');
  });
});
