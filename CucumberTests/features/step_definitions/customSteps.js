const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const {expect} = require('chai')
const { By, Key } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");



let sum = 0;
let driver;

Before(async function() {
    console.log('----------before hook----------')
    driver = await new Builder().forBrowser("chrome").build();
});

After(async function() {
    console.log('----------after hook----------')
    await driver.quit();
});

When('I add {int} and {int}', function (int, int2) {
    sum = int + int2;
});

Then('The result should be {int}', function (result) {
    expect(sum).equal(result);
});

Given('I visit Google search page', async function () {
    url = 'https://www.google.com/'
    
    await driver.get(url);
    await driver.findElement(By.xpath("/html/body/div[2]/div[2]/div[3]/span/div/div/div/div[3]/div[1]/button[2]/div")).click();
});

When('I search for {string}', async function (string) {
    word = 'doggo'
    await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).sendKeys(word, Key.RETURN);
});

Then('I should see doggos', async function () {
    let doggos = await driver.findElement(By.linkText('Obrazy dla doggo')).getText()
    .then(function(value) {
        return value;
    })
    expect(doggos).equal("Obrazy dla doggo");
    
});