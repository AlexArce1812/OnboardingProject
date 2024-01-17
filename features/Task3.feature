Feature: Task 3
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system
@QueryScenario @GuestBook  @onboardingProject @Webdriver @janusPersonHelper @productionSafe @task_3
  Scenario: Test 3 using BDD
    Given I open virginia page
    Then I Assert that the decedents first name appears in the Name section
    And I Scroll down until the Guest Book is visible
    Then I Leave a Guest Book entry
    And I verify the query

@dinamicQueryScenario @GuestBook  @onboardingProject @Webdriver @janusPersonHelper @productionSafe @task_3
   Scenario: Test 3 using BDD and dinamic url
    Given I open the person page
    Then I Assert that the person name appears in the Name section
    And I Scroll down until the Guest Book is visible
    Then I Leave a Guest Book entry
    