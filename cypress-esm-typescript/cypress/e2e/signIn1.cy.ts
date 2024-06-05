import { attachment, issue, label, link, step, tms } from "allure-js-commons"

it("sample test", () => {
  label("foo", "bar");
  link("https://allurereport.org", "custom", "Allure Web-Site");
  issue("https://allurereport.org/fake-issue/1", "Issue 1");
  issue("2", "Issue 2");
  tms("https://allurereport.org/fake-task/1", "Task 1");
  tms("2", "Task 2");
  attachment("Sample text attachment", "Hello world!", "text/plain");
  step("step 1", () => {
    step("step 1.1", () => {
      step("step 1.1.1", () => {
        attachment("Sample text attachment for step", "Goodbye world!", "text/plain");
      });
    });
  });
})
