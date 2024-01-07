module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'vitest', 'eslint-comments'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:vitest/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  rules: {
    'no-undef': 'off',
    'react/prop-types': 'off',
    'vitest/expect-expect': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
