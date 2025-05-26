module.exports = {
  root: true,
  extends: ['@repo/eslint-config/library.js'],
  parser: '@typescript-eslint/parse',
  parseOptions: {
    tsconfigRootDir: __dirname,
  },
};
