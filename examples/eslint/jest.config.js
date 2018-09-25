module.exports = {
  runner: require.resolve('jest-runner-eslint/src/runner'),
  displayName: 'eslint',
  testMatch: ['<rootDir>/**/*.js'],
  watchPlugins: [require.resolve('jest-runner-eslint/src/watchPlugin')],
};
