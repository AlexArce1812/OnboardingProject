const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    JanusPersonRecordHelper: {
      require: './helpers/JanusPersonRecord_Helper.js',
    },
    REST: {
      endpoint: 'https://www.qa-legacy.com/us/obituaries/chicagotribune/name', 
      prettyPrintJson: true,
      onRequest: (request) => {
        request.headers.auth = '123';
      },
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
  },
    WebDriver: {
      url: 'https://www.qa-legacy.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    userPage: "./pages/userPage.js"
  },
  name: 'onbordingProject',
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  }

}