const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure')
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS)

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins()

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      browser: 'chrome',
      //port: 9515,
      //path: '/',
      url: 'https://gestaoclick.com/login',
      show: true,
      waitForTimeout: 5000,
      keepBrowserState: true,
      keepCookies: true
    }
    //WebDriver: {
    //url: 'https://gestaoclick.com/login',
    //browser: 'chrome',
    //restart: false,
    //desiredCapabilities: {
    //chromeOptions: {
    //args: [/*"--headless",*/ '--disable-gpu', '--no-sandbox']
    // }
    //}
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  name: 'teste1',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
    //wdio: {
    //enabled: true,
    //services: ['selenium-standalone']
    //}
  }
}
