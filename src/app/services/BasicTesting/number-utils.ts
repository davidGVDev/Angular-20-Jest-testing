export class NumberUtils {

  static isEven(number: any): boolean {
    if (typeof number !== 'number') return false;
    return number % 2 === 0;
  }

  static isOdd(number: any): boolean {
    if (typeof number !== 'number') return false;
    return number % 2 !== 0;
  }

  static isPrime(number: any): boolean {
    if (typeof number !== 'number') return false;
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) return false;
    }
    return true;
  }

  static isPositive(number: any): boolean {
    if (typeof number !== 'number') return false;
    return number > 0;
  }

  static isNegative(number: any): boolean {
    if (typeof number !== 'number') return false;
    return number < 0;
  }

  static isInteger(number: any): boolean {
    if (typeof number !== 'number') return false;
    return Number.isInteger(number);
  }

  static isFloat(number: any): boolean {
    if (typeof number !== 'number') return false;
    return !Number.isInteger(number);
  }

  static round(number: any): any | false {
    if (typeof number !== 'number') return false;
    return Math.round(number);
  }

  static clamp(number: any, min: any, max: any): any | false {
    if (typeof number !== 'number' || typeof min !== 'number' || typeof max !== 'number') return false;
    return Math.max(min, Math.min(number, max));
  }
}
