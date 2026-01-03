export class StringUtils {
  static capitalize(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  static reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  static trim(str: string): string {
    return str.trim();
  }

  static toCamelCase(str: string): string {
    if (str.trim().length === 0) return '';

    const words = str.trim().split(/\s+/);
    const firstWord = words[0].toLowerCase();
    const restWords = words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return firstWord + restWords.join('');
  }

  static isPalindrome(str: string): boolean {
    if (str.length === 0) return false;
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  static countWords(str: string): number {
    if (str.length === 0) return 0;
    return str.split(' ').filter((word) => word.trim() !== '').length;
  }
}
