export default {
  extends: [
    'eslint:recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
  },
  plugins: ['babel', 'prettier'],
};
