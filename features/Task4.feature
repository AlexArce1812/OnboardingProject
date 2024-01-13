Feature: Task 4
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system
@tableScenario @onboardingProject @REST @productionSafe @GuestBook @task_4
  Scenario Outline: Test 4 using BDD
    Given I going to check the urls "<url>"
    Then I check the status code "<expectedStatusCode>"

    Examples:
    | url                                         | expectedStatusCode |
    |/virginia-gruchalski-obituary?pid=196167379  |200                 |
    |/virginia-gruchalski-obituary?pid=123456789  |404                 |
