const {Builder, By} = require("selenium-webdriver");

async function herakuApp () {

    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://testpages.herokuapp.com/styled/basic-html-form-test.html");

    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[1]/td/input")).sendKeys("Kristina");
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[2]/td/input")).sendKeys("myPassword");
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[3]/td/textarea")).sendKeys("My comment");
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[5]/td/input[1]")).click();
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[6]/td/input[1]")).click();
    await driver.findElement(By.xpath("/html/body/div/div[3]/form/table/tbody/tr[8]/td/select/option[6]")).click();

}
herakuApp()