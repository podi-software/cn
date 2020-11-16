module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
      }
  },
  preset: 'ts-jest'
};