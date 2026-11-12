/** @type {import('jest').Config} */
module.exports = {
  preset: "jest-expo",
  // pnpm keeps packages under node_modules/.pnpm, so allow that prefix
  // before the packages that ship untranspiled code and must go through Babel.
  transformIgnorePatterns: [
    "node_modules/(?!(?:\\.pnpm/[^/]+/node_modules/)?(?:(?:jest-)?react-native|@react-native(?:-community)?|expo(?:nent)?|@expo(?:nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg))",
  ],
  moduleNameMapper: {
    "\\.css$": "<rootDir>/test/style-mock.js",
  },
  testPathIgnorePatterns: ["/node_modules/", "/.expo/"],
};
