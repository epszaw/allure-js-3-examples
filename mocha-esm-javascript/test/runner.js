import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import Mocha from "mocha";
import AllureMochaReporter from "allure-mocha";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const mocha = new Mocha({
	timeout: 16000,
	reporter: AllureMochaReporter,
	parallel: false,
	reporterOptions: {
		resultsDir: path.resolve(dirname, "../allure-results"),
	},
});

glob.sync("./test/spec/*.js").forEach((file) => mocha.addFile(file));
mocha
	.loadFilesAsync()
	.then(() => mocha.run((failures) => process.exit(failures === 0 ? 0 : 1)));
