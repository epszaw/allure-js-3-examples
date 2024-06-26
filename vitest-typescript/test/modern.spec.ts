import { it } from "vitest";
import * as allure from "allure-js-commons";

it("sample test", async () => {
  await allure.owner("John Doe x");
  await allure.issue("https://example.org", "JIRA-2");
  await allure.step("step 1", async () => {
    await allure.step("step 1.2", async () => {
      await allure.attachment("text attachment", "some data", "text/plain");
    });
  });
  await allure.step("step 2", async () => {
  });
});
