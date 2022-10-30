module.exports = {
  globals: {
    NODE_ENV: 'test'
  },
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/test/**/*.test.(js|ts|jsx|tsx)'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'vue'],
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.module.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}', 'src/utils/*.{js,ts}'],
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
    '\\.(less|css)$': 'jest-less-loader',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(lodash-es|other-es-lib))']
};
