import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './test/*_test.ts',
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
    I: './steps_file'
  },
  name: 'codeceptjs-cjs-ts'
}
