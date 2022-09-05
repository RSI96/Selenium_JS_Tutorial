const { By, Key } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");
const assert = require("assert")


async function example() {

    const linkToMainPage = "http://petclinic.eastus.cloudapp.azure.com:8888/";

    //launch a browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to an app
    await driver.get(linkToMainPage)
    
    //do sth
    await driver.findElement(By.xpath("/html/body/nav/div/div/ul/li[2]/a")).click();
    await driver.findElement(By.xpath("/html/body/div/div/form/div[1]/div/div/input")).sendKeys("Franklin", Key.RETURN);
    await driver.sleep(2000);
    
    //assert
    let petName = await driver.findElement(By.xpath("/html/body/div/div/table[2]/tbody/tr/td[1]/dl/dd[1]")).getText()
        .then(function(value) {
            return value;
        })
    assert.strictEqual(petName, "Leo");

    //close a browser
    await driver.quit();

}

example();