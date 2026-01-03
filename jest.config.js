module.exports = {
  preset: 'ts-jest',
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

  testEnvironment: 'jsdom',

  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],

  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
        },
      },
    ],
    '^.+\\.(mjs|js)$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { node: 'current' },
              modules: 'commonjs',
            },
          ],
        ],
      },
    ],
  },

  transformIgnorePatterns: [
    'node_modules/(?!(@angular|rxjs|tslib|zone.js)/)',
  ],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'json', 'node'],
};
