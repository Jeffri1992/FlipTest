import { assert, expect, should } from "chai";
import dotenv from "dotenv";
import reporter from "cucumber-html-reporter";
import fs from "fs";
import path from "path";
import CucumberJsJson from "wdio-cucumberjs-json-reporter";

const platform = process.env.PLATFORM_NAME || 'Android';

const jsonDir = process.env.BITRISE_ENV === 'false' ? './report/' : './bitrise-report/';
const removeFilesInDirectory = (directory) => {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
    } else if (fs.statSync(filePath).isDirectory()) {
      fs.rmdirSync(filePath, { recursive: true });
    }
  });
}

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  path: '/wd/hub',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './features/scenarios/**/*.feature'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  // Just comment the .env value if you are not need some of these capabilities
  capabilities: [],

  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner, @wdio/lambda-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/applitools-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: '',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 120000 * 3,
  //
  // Default request retries count
  connectionRetryCount: 2,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.

  services: [
    ['appium', {
      command: 'appium',
      logPath: './',
    }]
  ],

  // Appium Service config
  // see details: https://webdriver.io/docs/appium-service.html

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //appiumVersion
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ['spec',
    [
      'cucumberjs-json', {
        jsonFolder: process.env.BITRISE_ENV === 'false' ? 'report/json/' : 'bitrise-report/json/',
        language: 'en'
      }]
  ],
  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    require: [
      './features/step-definitions/**/*.js'
    ],

    // <boolean> show full backtrace for errors
    backtrace: false,

    requireModule: [],

    // <boolean> invoke formatters without executing steps
    dryRun: false,

    // <boolean> abort the run on first failure
    failFast: false,

    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],

    // <boolean> disable colors in formatter output
    colors: true,

    // <boolean> hide step definition snippets for pending steps
    snippets: true,

    // <boolean> hide source uris
    source: true,

    // <string[]> (name) specify the profile to use
    profile: [],

    // <boolean> fail if there are any undefined or pending steps
    strict: false,

    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',

    // <number> timeout for step definitions
    timeout: 180000,

    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: true
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details.
   */
  onPrepare: function (config, capabilities) {
    capabilities.push(
      {
        "platformName": "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "Pixel 4",
        "appium:avd": "Pixel_4",
        // "appium:browserName": "Chrome",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.swaglabsmobileapp",
        "appium:appActivity": 'com.swaglabsmobileapp.MainActivity',
        "appium:app": "/Users/jeffri.effendi/Downloads/Android.SauceLabs.Mobile.app.2.7.1.apk",
        "appium:autoGrantPermissions": true,
      },
    );
  },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  //   /** This one is for delete screenshots and report generated on last run*/
  //   //   const del = require('del');
  //   //   del(['allure-report', 'screenshots', 'allure-results' ]);
  //   if (capabilities['wdio:options'] && capabilities['wdio:options'].tags) {
  //     const tags = capabilities['wdio:options'].tags;
  //     config.cucumberOpts.tags = tags;
  //   }
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>}
   * capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */

  before: function (capabilities, specs) {
    // Remove old JSON files and folder
    removeFilesInDirectory(jsonDir);
    global.should = should();
    global.assert = assert;
    global.expect = expect;
    dotenv.config();
  },

  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Runs before a Cucumber feature
   */
  // beforeFeature: function (uri, feature, scenarios) {
  // },
  /**
   * Runs before a Cucumber scenario
   */
  // beforeScenario: function (uri, feature, scenario, sourceLocation) {
  // },
  /**
   * Runs before a Cucumber step
   */
  // beforeStep: function (uri, feature, stepData, context) {
  // },
  /**
   * Runs after a Cucumber step
   */
  // afterStep: function (uri, feature, { error, result, duration, passed }, stepData, context) {
  // },
  /**
   * Runs after a Cucumber scenario
   */
  afterScenario: async function (uri, feature, scenario, result, sourceLocation) {
    const takeScreenshotFor = process.env.TAKE_SCREENSHOT_FOR;
    const results = {
      status: uri.result.status
    };
    try {
      if (takeScreenshotFor === 'failed') {
        if (results.status === 'FAILED') {
          const screenshot = await driver.takeScreenshot();
          await CucumberJsJson.attach(screenshot, 'image/png');
        };
      } else if (takeScreenshotFor === 'passed') {
        if (results.status === 'PASSED') {
          const screenshot = await driver.takeScreenshot();
          await CucumberJsJson.attach(screenshot, 'image/png');
        };
      } else if (takeScreenshotFor === 'all') {
        const screenshot = await driver.takeScreenshot();
        await CucumberJsJson.attach(screenshot, 'image/png');
      };
    } catch {
      console.log('=====Cannot take screenshot on this page=====');
    };
    if (process.env.BITRISE_ENV === 'true') {
      await driver.reloadSession();
    };
  },

  /**
   * Runs after a Cucumber feature
   */
  // afterFeature: async function (uri, feature, scenarios) {
  //
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },

  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },

  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: async function (exitCode, config, capabilities, results) {
    let screenshotDir;
    if (process.env.BITRISE_ENV === 'true') {
      screenshotDir = 'bitrise-screenshots';
    } else if (platform === 'iOS') {
      screenshotDir = 'ios-screenshots';
    } else {
      screenshotDir = 'android-screenshots';
    }

    const options = {
      theme: 'bootstrap',
      jsonDir: process.env.BITRISE_ENV === 'false' ? 'report' : 'bitrise-report',
      output: process.env.BITRISE_ENV === 'false' ? 'report/cucumber-report.html' : 'bitrise-report/cucumber-report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": `${process.env.APP_VERSION}`,
        "Platform": `${process.env.PLATFORM_NAME}`,
        "Test Environment": `${process.env.TEST_ENV}`
      },
      failedSummaryReport: true,
      screenshotsDirectory: screenshotDir,
      storeScreenshots: true
    };

    if (process.env.GENERATE_REPORT === 'true') {
      await reporter.generate(options);
    }
  },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
