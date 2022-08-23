Feature: ID services price check

  Scenario Outline: Should check prices for different currency

    Given I am on telnyx ID services page
    When I choose the '<currency>' currency
    Then I see the inbound CNAM price '<price>'

  Examples:
    |currency|price|
    |USD|$0.40|
    |GBP|£0.28|
    |AUD|A$0.62|
    |EUR|€0.34|