$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login to car wale stie",
  "description": "",
  "id": "login-to-car-wale-stie",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "could login successflly",
  "description": "",
  "id": "login-to-car-wale-stie;could-login-successflly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "clcik to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter mail as \"\u003cMyemail\u003e\" and passwd as \"\u003cMypassd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clck sgn n bttn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "logn as my logn name \"\u003cis\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "l logn out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "l close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-to-car-wale-stie;could-login-successflly;",
  "rows": [
    {
      "cells": [
        "Title",
        "Myemail",
        "",
        "Mypassd",
        "is"
      ],
      "line": 16,
      "id": "login-to-car-wale-stie;could-login-successflly;;1"
    },
    {
      "cells": [
        "New Cars",
        "mm_mike",
        "",
        "sonsofgod",
        "mm_mike"
      ],
      "line": 17,
      "id": "login-to-car-wale-stie;could-login-successflly;;2"
    },
    {
      "cells": [
        "used Cars",
        "mfatogun50@yahoo.com",
        "",
        "sonsofgod",
        "mfatogun50@yahoo.com"
      ],
      "line": 18,
      "id": "login-to-car-wale-stie;could-login-successflly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "am on car wale stie",
  "keyword": "Given "
});
formatter.match({
  "location": "LgnTest.am_on_car_wale_stie()"
});
formatter.result({
  "duration": 104455900577,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "could login successflly",
  "description": "",
  "id": "login-to-car-wale-stie;could-login-successflly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "clcik to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter mail as \"mm_mike\" and passwd as \"sonsofgod\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clck sgn n bttn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "logn as my logn name \"mm_mike\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "l logn out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "l close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LgnTest.clcik_to_login()"
});
formatter.result({
  "duration": 248194886347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mm_mike",
      "offset": 15
    },
    {
      "val": "sonsofgod",
      "offset": 39
    }
  ],
  "location": "LgnTest.enter_mail_as_and_passwd_as(String,String)"
});
formatter.result({
  "duration": 56801307147,
  "status": "passed"
});
formatter.match({
  "location": "LgnTest.clck_sgn_n_bttn()"
});
formatter.result({
  "duration": 7568851569,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LgnTest.l_logn_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LgnTest.l_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "am on car wale stie",
  "keyword": "Given "
});
formatter.match({
  "location": "LgnTest.am_on_car_wale_stie()"
});
formatter.result({
  "duration": 45010781406,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "could login successflly",
  "description": "",
  "id": "login-to-car-wale-stie;could-login-successflly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "clcik to login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "enter mail as \"mfatogun50@yahoo.com\" and passwd as \"sonsofgod\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "clck sgn n bttn",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "logn as my logn name \"mfatogun50@yahoo.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "l logn out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "l close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LgnTest.clcik_to_login()"
});
formatter.result({
  "duration": 14400966778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mfatogun50@yahoo.com",
      "offset": 15
    },
    {
      "val": "sonsofgod",
      "offset": 52
    }
  ],
  "location": "LgnTest.enter_mail_as_and_passwd_as(String,String)"
});
formatter.result({
  "duration": 1511399809,
  "status": "passed"
});
formatter.match({
  "location": "LgnTest.clck_sgn_n_bttn()"
});
formatter.result({
  "duration": 6906453568,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LgnTest.l_logn_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LgnTest.l_close_browser()"
});
formatter.result({
  "status": "skipped"
});
});