Feature: login page validation

Scenario: login with valid user and password
Given Provide valid URL
When Provide valid username and password
Then The url will contains the inventory subdirectory
