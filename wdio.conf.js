exports.config = {
  specs: [
    './test/browser/**/*.js'
  ],
  exclude: [
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
  }],
  sync: true,
  logLevel: 'error',
  reporterOptions: {
    junit: {
      outputDir: './selenium-xunit/'
    }
  },
  coloredLogs: true,
  screenshotPath: './selenium-errorshots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 30000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'junit'],
  mochaOpts: {
    ui: 'bdd'
  },
  before: function (capabilities, specs) {
    var chai = require('chai');
    global.chai = chai;
    global.assert = chai.assert;
  },
}

