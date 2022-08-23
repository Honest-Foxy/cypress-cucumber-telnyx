Feature: Support center check

  Scenario Outline: Should check the voice local numbers calculator

    Given I am on telnyx support center page
    When I click the '<title>' title button 
    Then I see the '<title>' title

  Examples:
    |title|
    |Getting Started|
    |Configuration Guides|
    |Messaging Articles and Guides|
    |Voice and Fax|
    |Porting Articles and Guides|
    |Billing & Pricing|
    |Programmable Wireless|
    |Tours and Videos|
    |FAQs about Telnyx|
    |International DID Requirements|
    |Bulk Edit Numbers|
    |Reporting Articles and Guides|
    |Everything SIP|
    |Programmable Applications|
    |Reference Material|

  Scenario Outline: Should check searching on the Support Center page

    Given I am on telnyx support center page
    When I enter '<keyword>' into the 'search' field
    Then I see the 'Search results for: <keyword>' label 

  Examples:
    |keyword|
    |open account price|
    |configure 3CX|
    |SMS|
    |pricing model|
    |SIP|

  Scenario Outline: Should check help pop-up in the FAQ's section

    Given I am on telnyx support center page
    When I click the 'FAQs about Telnyx' button
    And I click the 'Robocall Mitigation Database and Call Blocking' button
    And I click the 'Disappointed Emoji' button
    Then I see the 'If you'd like, you can ask the team for help here.' label

  Scenario Outline: Should ckeck create account link on the Getting Started section

    Given I am on telnyx support center page
    When I click the 'Getting Started' button
    And I click the 'How to Sign Up for a Telnyx account' button
    Then the 'here' element have 'href' attribute value 'https://telnyx.com/sign-up'