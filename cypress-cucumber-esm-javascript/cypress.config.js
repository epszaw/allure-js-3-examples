import { allureCypress } from "allure-cypress/reporter"
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default {
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
