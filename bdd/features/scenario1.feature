Feature: Access a Product via Category with Filters
  Scenario: Apply filters and verify tags
    Given I open the homepage
    When I navigate to Cell Phones & Smartphones
    And I apply filters for condition, price and location
    Then I should see filter tags applied