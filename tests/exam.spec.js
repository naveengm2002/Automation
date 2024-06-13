const {test, chromium, expect } = require('@playwright/test');

test('has title',(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://staging.kriyadocs.com/');
  await page.waitForLoadState('networkidle',{timeout:30000});
  console.log('load');
  await page.fill('#username','naveengm2812@gmail.com');
  await page.fill('#password','Welcome@2024');
  await page.keyboard.press('Enter');


    await page.waitForSelector('//*[@id="login-page"]/div/form/div/div[3]/div[2]/div/div[1]/span | //*[@id="customerSelectionDiv"]/div[1]/div[1]');
    
    if(await page.locator('.col.s6.confirmationPanel').isVisible()) {
      await page.click('.btn.waves-effect.waves-light.confirm');
    }

    await page.waitForSelector('.customerTitleDiv');
    await expect(page.locator('.customerTitleDiv')).toHaveText('Select a customer');
  

  

  
}));