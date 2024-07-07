Feature: Login to Swag Labs App

  @login_login-using-email
  Scenario: Login into swag labs
    Given User login into swag labs
    Then Verify price in swag labs
    And Fill form and checkout

  