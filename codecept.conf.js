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
      require: 'codeceptjs-chai'
    },
    WebDriver: {
      url: 'https://www.qa-legacy.com',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps_file.js',
    userPage: './pages/userPage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/Task1AND2_steps.js',
            './step_definitions/Task3_steps.js',
            './step_definitions/Task4_steps.js']
  },
  name: 'onbordingProject',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }],
}