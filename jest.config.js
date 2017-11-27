module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  testMatch: [
    '**/test/**/*.spec.js',
    '**/test/**/*.spec.ts',
  ],
  testPathIgnorePatterns: ['node_modules'],
};
