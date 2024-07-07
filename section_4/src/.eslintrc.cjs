module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2017: true,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
    rules: {
      'no-undef': 'off',
      'react/react-in-jsx-scope': 'off',
      'semi': [2, 'always']
    },
    settings: {
      react: {
        version: 'detect',
      },
    }
  };