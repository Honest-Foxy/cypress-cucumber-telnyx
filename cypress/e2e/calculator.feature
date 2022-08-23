Feature: Calculator check

  Scenario: Should check the voice local numbers calculator

    Given I am on telnyx main page
    When I set the 'Make outbound calls' slider to the 1 of length
    And I set the 'Receive inbound calls' slider to the 1 of length
    Then I see the 'Save up to $9257 per mounth' text

  Scenario: Should check the voice toll-free numbers calculator

    Given I am on telnyx main page
    When I set the 'Make outbound calls' slider to the 1 of length
    And I set the 'Receive inbound calls' slider to the 1 of length
    And I click the 'Toll-free numbers' button
    Then I see the 'Save up to $18847 per mounth' text

  Scenario: Should check the SMS local numbers calculator

    Given I am on telnyx main page
    When I click the 'SMS' button
    And I set the 'Send messages' slider to the 1 of length
    And I set the 'Receive messages' slider to the 1 of length
    Then I see the 'Save up to $7000 per mounth' text
  
  Scenario: Should check the SMS toll-free numbers calculator

    Given I am on telnyx main page
    When I click the 'SMS' button
    And I click the 'Toll-free numbers' button
    And I set the 'Send messages' slider to the 1 of length
    And I set the 'Receive messages' slider to the 1 of length
    Then I see the 'Save up to $4000 per mounth' text     