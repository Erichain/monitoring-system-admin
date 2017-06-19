module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  testMatch: [
    '**/test/**/*.spec.js',
    '**/test/**/*.spec.ts',
    '**/test/**/*.spec.tsx'
  ],
  testPathIgnorePatterns: ['node_modules'],
};
