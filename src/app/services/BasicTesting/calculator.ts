export class CalculatorService {
  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
  static power(a: number, b: number): number {
    return Math.pow(a, b);
  }
  static squareRoot(a: number): number {
    return Math.sqrt(a);
  }
  static percentage(a: number, b: number): number {
    return (a / 100) * b;
  }
  static modulo(a: number, b: number): number {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a % b;
  }
}
