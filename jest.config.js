module.exports = {
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.interface.ts',
    '!src/**/*.model.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
  ],
  coverageReporters: ['html', 'text-summary', 'lcov'],
  coverageDirectory: 'coverage',
};
