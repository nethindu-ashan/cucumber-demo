Feature: Login

  Scenario: Successful login
    Given the user is on the login page
    When the user enters username "admin" and password "1234"
    Then login should be successful

  Scenario: Wrong password
    Given the user is on the login page
    When the user enters username "admin" and password "wrong"
    Then login should fail

  Scenario: Empty password
    Given the user is on the login page
    When the user enters username "admin" and password ""
    Then an error message should be shown