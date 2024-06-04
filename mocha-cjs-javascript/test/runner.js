const path = require("path");
const glob = require("glob");
const Mocha = require("mocha");

const mocha = new Mocha({
	timeout: 16000,
	reporter: "allure-mocha",
	parallel: false,
	reporterOptions: {
		resultsDir: path.resolve(__dirname, "../allure-results"),
	},
});

glob.sync("./test/spec/*.js").forEach((file) => mocha.addFile(file));
mocha.run((failures) => process.exit(failures === 0 ? 0 : 1));
