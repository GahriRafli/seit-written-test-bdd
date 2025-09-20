Feature: Access a Product via Search
  Scenario: Search and validate first result
    Given I open the homepage
    When I search for "MacBook" in category "Computers/Tablets & Networking"
    Then the first result should contain "MacBook"