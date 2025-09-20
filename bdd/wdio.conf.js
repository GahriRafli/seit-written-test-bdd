exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [{ browserName: 'chrome', maxInstances: 1 }],
  logLevel: 'info',
  baseUrl: 'https://www.ebay.com',
  waitforTimeout: 10000,
  framework: 'cucumber',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./features/step-definitions/*.steps.js'],
    timeout: 60000
  },
  services: ['chromedriver']
};