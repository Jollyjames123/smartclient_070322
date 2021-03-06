$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("excercises.feature");
formatter.feature({
  "line": 1,
  "name": "SmartClient technical test",
  "description": "",
  "id": "smartclient-technical-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9767399000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Check featured tile functions are working fine",
  "description": "",
  "id": "smartclient-technical-test;check-featured-tile-functions-are-working-fine",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is on the featured tile filtering page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User set animal using letter \"a\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "set max life span to 40",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "sort order by \"Life Span\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select checkbox to ascending",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User assert that results contain more than 12 items",
  "keyword": "Then "
});
formatter.match({
  "location": "ExStepdefs.userIsOnTheFeaturedTileFilteringPage()"
});
formatter.result({
  "duration": 801702700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 30
    }
  ],
  "location": "ExStepdefs.userSetAnimalUsingLetter(String)"
});
formatter.result({
  "duration": 630677500,
  "status": "passed"
});
formatter.match({
  "location": "ExStepdefs.setMaxLifeSpanTo40()"
});
formatter.result({
  "duration": 484380200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Life Span",
      "offset": 15
    }
  ],
  "location": "ExStepdefs.sortOrderBy(String)"
});
formatter.result({
  "duration": 50181627100,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d98.0.4758.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#invalid_selector_exception\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-KK246M4D\u0027, ip: \u0027172.23.80.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6b6fdb1d88eb88a6b2b06900f8d10106, findElements {using\u003dcss selector, value\u003dframe#1,iframe#1}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\patel\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49206}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:49206/devtoo..., se:cdpVersion: 98.0.4758.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6b6fdb1d88eb88a6b2b06900f8d10106\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:179)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:102)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:398)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:390)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:985)\r\n\tat com.smartclient.pages.FeaturedTileFilterPage.sortOrder(FeaturedTileFilterPage.java:66)\r\n\tat com.smartclient.steps.ExStepdefs.sortOrderBy(ExStepdefs.java:32)\r\n\tat ???.And sort order by \"Life Span\"(excercises.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ExStepdefs.selectCheckboxToAscending()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 43
    }
  ],
  "location": "ExStepdefs.userAssertThatResultsContainMoreThanItems(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 400197200,
  "status": "passed"
});
});