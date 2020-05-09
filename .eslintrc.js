module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:import/typescript',
    'prettier/react',
  ],
  globals: {
    __PATH_PREFIX__: true,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier/react',
        'prettier/@typescript-eslint',
      ],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.jsx', '.tsx'],
          },
        ],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
        ],
      },
    },
    {
      files: ['**/*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'warn',
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        'react/jsx-props-no-spreading': 'warn',
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: { jest: true },
    },
  ],
};
