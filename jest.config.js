module.exports = {
  // Gatsby internal mocking to prevent unnecessary errors
  globals: { __PATH_PREFIX__: '' },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    // mocking static file imports, which Jest can’t handle
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/mocks/file-mock.js',
  },
  setupFiles: ['<rootDir>/config/jest/mocks/global-loader-mock.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setup-test-env.js'],
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$',
  testURL: 'http://localhost',
  transform: { '^.+\\.[jt]sx?$': '<rootDir>/config/jest/jest-preprocess.js' },
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
