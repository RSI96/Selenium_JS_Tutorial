const { By } = require("selenium-webdriver");
const { Builder } = require("selenium-webdriver");

async function example() {
    const linkToMainPage = "http://petclinic.eastus.cloudapp.azure.com:8888/";

    //launch a browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to an app
    await driver.get(linkToMainPage)
    
    //do sth
    await driver.findElement(By.xpath("/html/body/nav/div/div/ul/li[2]/a")).click();
    await driver.sleep(2000);

    //close a browser
    await driver.quit();

}

example();