module.exports = {
  projects: [
    {
      displayName: 'test',
      moduleFileExtensions: ['ts', 'js'],
      testMatch: ['<rootDir>/**/__tests__/**/*.test.(j|t)s'],
      transform: {
        '^.+\\.(j|t)s$': 'babel-jest',
      },
    },
    {
      runner: 'jest-runner-tslint',
      displayName: 'tslint',
      moduleFileExtensions: ['ts'],
      testMatch: ['<rootDir>/**/*.ts'],
    },
    {
      runner: 'jest-runner-tsc',
      displayName: 'tsc',
      moduleFileExtensions: ['ts', 'tsx'],
      testMatch: ['<rootDir>/**/*.ts'],
    },
  ],
};
