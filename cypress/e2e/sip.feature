Feature: SIP price check

  Scenario Outline: Should check prices for different countries and currency

    Given I am on telnyx SIP page
    When I choose the '<country>' country
    And I choose the '<currency>' currency
    Then I see the local calls price '<price>'

  Examples:
    |country|currency|price|
    |Ukraine|USD|$0.1660|
    |United Kingdom|GBP|£0.0040|
    |United Arab Emirates|AUD|A$0.2231|
    |Venezuela|EUR|€0.0347|

  Scenario Outline: Should fill the "Download SIP Trunking pricing" form

    Given I am on telnyx SIP page
    When I enter '<firstName>' into the 'First name' field
    And I enter '<lastName>' into the 'Last name' field
    And I enter '<email>' into the 'Email' field
    And I click the 'Download CSV' button
    Then I see the 'Thank you. We'll email you pricing right away!' label

  Examples:
    |firstName|lastName|email|
    |Leonid|Mmm|pan.leonid@mmm.com|
    |Oleksandr|Leonov|oleksandr@leonov.com|

  Scenario: Should go to "Talk to an expert" form from the SIP page

    Given I am on telnyx SIP page
    When I click the 'Talk to sales' button
    Then I see the 'Talk to an expert' label

  Scenario Outline: Should check text areas are displayed in the Frequently Asked Questions section

    Given I am on telnyx SIP page
    Then I see the 'expanded text' label
    When I click the '<button name>' button
    Then I see the 'expanded text' label

  Examples:
    |button name|
    |What is the SIP Trunk price per channel?|
    |How much can I save by using SIP Trunking?|
    |How many simultaneous calls can a SIP Trunk handle?|