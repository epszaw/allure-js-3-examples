const AllureJasmineReporter = require("allure-jasmine");

const reporter = new AllureJasmineReporter();

jasmine.getEnv().addReporter(reporter);
