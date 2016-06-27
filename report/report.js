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
  "duration": 1392255328,
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
  "duration": 61498623,
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
  "duration": 67401946,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_on_submit_button()"
});
formatter.result({
  "duration": 74696983,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_see_a_message()"
});
formatter.result({
  "duration": 1274523718,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_be_redirected_to_IndexPage()"
});
formatter.result({
  "duration": 1829983722,
  "error_message": "java.lang.AssertionError: \nExpected: \"ABFF\"\n     but: was \"ABFF1\"\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\n\tat com.abff.features.steps.LoginSteps.i_should_be_able_to_be_redirected_to_IndexPage(LoginSteps.java:48)\n\tat ✽.And I should be able to be redirected to IndexPage(login.feature:13)\n",
  "status": "failed"
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
  "duration": 36591532,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_authenticate_on_LoginPage()"
});
formatter.result({
  "duration": 855887,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.abff.features.steps.LoginSteps.i_authenticate_on_LoginPage(LoginSteps.java:38)\n\tat ✽.When I authenticate on LoginPage(login.feature:18)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginSteps.i_should_be_able_to_be_redirected_to_IndexPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "Authentication PageObject",
  "description": "",
  "id": "login;authentication-pageobject",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@login"
    },
    {
      "line": 21,
      "name": "@object"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on LoginPage2",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I authenticate on LoginPage2",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I should be able to be redirected to IndexPage2",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});