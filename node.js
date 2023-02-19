module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "@typescript-eslint/strict-boolean-expressions": 'off',
    "@typescript-eslint/no-misused-promises": 'off',
    "@typescript-eslint/no-namespace": 'off',
    "@typescript-eslint/no-throw-literal": 'off',
    "@typescript-eslint/no-dupe-class-members": 'off',
    "@typescript-eslint/adjacent-overload-signatures": 'off',
    "@typescript-eslint/naming-convention": 'off',
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/prefer-nullish-coalescing": 'off',
    "@typescript-eslint/no-extraneous-class": 'off'
  }
}
