module.exports = {
  preset: 'jest-expo',
  moduleNameMapper: {
    '^expo$': '<rootDir>/__mocks__/expo.js',
    '^expo-location$': '<rootDir>/__mocks__/expo-location.ts',
    '^react-native-vision-camera$': '<rootDir>/__mocks__/react-native-vision-camera.ts'
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-native-vision-camera' +
      '|react-native-reanimated' +
      '|expo' +
      '|@expo' +
      '|@unimodules' +
      '|native-base' +
      '|expo-modules-core' +
      ')/)',
  ],
};
