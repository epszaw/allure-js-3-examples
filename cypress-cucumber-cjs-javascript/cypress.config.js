const { allureCypress } = require("allure-cypress/reporter")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = {
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: "**/*.feature",
    viewportWidth: 1240,
    video: true,
    screenshotOnRunFailure: true,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      allureCypress(on, config)

      return config
    },
  },
};
