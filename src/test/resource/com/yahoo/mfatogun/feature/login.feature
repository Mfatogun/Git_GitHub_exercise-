Feature: Login to car wale stie

  Background: 
    Given am on car wale stie
   

  Scenario Outline: could login successflly
    When clcik to login
    And enter mail as "<Myemail>" and passwd as "<Mypassd>"
    And clck sgn n bttn
    Then logn as my logn name "<is>"
    And l logn out
    Then l close browser

    Examples: 
      | Title     | Myemail              |  | Mypassd   | is                   |
      | New Cars  | mm_mike              |  | sonsofgod | mm_mike              |
      | used Cars | mfatogun50@yahoo.com |  | sonsofgod | mfatogun50@yahoo.com |
