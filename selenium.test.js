import { Builder, Browser } from 'selenium-webdriver';
import { until, By } from 'selenium-webdriver';
//import chrome from 'selenium-webdriver/chrome';

(async function testCalculator() {
  const driver = await new Builder()
    .forBrowser('chrome')
    //.setChromeOptions(new chrome.Options().headless()) // remove `.headless()` to see the browser
    .build();

  try {
    // Load the HTML file (adjust to your file path)
    await driver.get('http://127.0.0.1:5500/index.html');

    // Input numbers
    await driver.findElement(By.id('num1')).sendKeys('10');
    await driver.findElement(By.id('num2')).sendKeys('5');

    // Perform Add
    await driver.findElement(By.id('add')).click();
    await driver.wait(until.elementTextIs(driver.findElement(By.id('resultToDisplay')), '15'), 2000);

    // Perform Subtract
    await driver.findElement(By.id('subtract')).click();
    await driver.wait(until.elementTextIs(driver.findElement(By.id('resultToDisplay')), '5'), 2000);

    // Perform Multiply
    await driver.findElement(By.id('multiply')).click();
    await driver.wait(until.elementTextIs(driver.findElement(By.id('resultToDisplay')), '50'), 2000);

    // Perform Divide
    await driver.findElement(By.id('divide')).click();
    await driver.wait(until.elementTextIs(driver.findElement(By.id('resultToDisplay')), '2'), 2000);

    console.log('All math operations passed.');

  } catch (err) {
    console.error('Test failed:', err);
  } finally {
    await driver.quit();
  }
})();
