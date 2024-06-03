/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './test/*_test.js',
  output: './output',
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