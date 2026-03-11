import { Before, After } from "@cucumber/cucumber";

Before(function () {
  console.log("Starting scenario...");
});

After(function () {
  console.log("Scenario finished.");
});