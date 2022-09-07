Feature: Search doggos on Google.

    Scenario: Search doggo on Google.
        Given I visit Google search page
        When I search for 'doggo'
        Then I should see doggos