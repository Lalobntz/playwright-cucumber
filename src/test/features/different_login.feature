Feature: Login with different credentials with different responses

  Scenario: Verify different responses for different user's credentials
    Given The Sauce Demo URL
    When Enter username as "<username>"
    And Enter password as "<password>"
    Then Click on Login buttom
    And Verify login message as "<message>"

    Examples:
      | username                | password     | message |
      | locked_out_user         | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
      | standard_user           | sauce_secret | Epic sadface: Username and password do not match any user in this service |