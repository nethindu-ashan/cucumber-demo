import assert from "assert";
import { Given, When, Then } from "@cucumber/cucumber";
import { login } from "../../src/login.js";

let result;

Given("the user is on the login page", function () {
  console.log("User is on login page");
});

When("the user enters username {string} and password {string}", function (username, password) {
  result = login(username, password);
});

Then("login should be successful", function () {
  assert.strictEqual(result, "success");
});

Then("login should fail", function () {
  assert.strictEqual(result, "fail");
});

Then("an error message should be shown", function () {
  assert.strictEqual(result, "Password required");
});