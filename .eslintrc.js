module.exports = {
  env: {
    mocha: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'camelcase': 'off',
    '@typescript-eslint/camelcase': 'off',
    'no-unused-expressions': 'off'
  }
}
