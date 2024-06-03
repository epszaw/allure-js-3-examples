const { setCommonPlugins } = require("@codeceptjs/configure");

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*_test.js',
  output: './output',
  plugins: {
    allure: {
      require: "allure-codeceptjs",
      enabled: true,
    },
  },
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://allurereport.org',
      show: false
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'codeceptjs-cjs-js'
}