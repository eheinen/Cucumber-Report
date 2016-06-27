$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As an admin of website\nI need to authenticate in the website\nSo that, I can see the Index page",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Authentication PageFactory",
  "description": "",
  "id": "login;authentication-pagefactory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login"
    },
    {
      "line": 6,
      "name": "@factory"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I type \"admin\" in username field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I type \"admin\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should be able to see a message",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I should be able to be redirected to IndexPage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_am_on_LoginPage()"
});
formatter.result({
  "duration": 1388527815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_type_in_username_field(String)"
});
formatter.result({
  "duration": 64740411,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    }
  ],
  "location": "LoginSteps.i_type_in_password_field(String)"
});
formatter.result({
  "duration": 67666771,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 79338522,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_see_a_message()"
});
formatter.result({
  "duration": 1247011717,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_be_redirected_to_IndexPage()"
});
formatter.result({
  "duration": 1856637239,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Authentication PageObject",
  "description": "",
  "id": "login;authentication-pageobject",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@login"
    },
    {
      "line": 15,
      "name": "@object"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on LoginPage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I authenticate on LoginPage",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should be able to be redirected to IndexPage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_am_on_LoginPage()"
});
formatter.result({
  "duration": 33383256,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_authenticate_on_LoginPage()"
});
formatter.result({
  "duration": 3251333212,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_be_redirected_to_IndexPage()"
});
formatter.result({
  "duration": 1087935900,
  "status": "passed"
});
});