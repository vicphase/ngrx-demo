const jestConfig = {
  collectCoverage: true,
  ci: true,
  watchAll: false,
  coverageDirectory: './coverage',
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ['node_modules', 'src'],
};

export default jestConfig;
