module.exports = {
  transform: {
    "^.+\\.[jt]s$": "<rootDir>/jest/jest-preprocess.js"
  },
  testPathIgnorePatterns: [`node_modules`],
  setupFiles: [`<rootDir>/jest/loadershim.js`],
};
