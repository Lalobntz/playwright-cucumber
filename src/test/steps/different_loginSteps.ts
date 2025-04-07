import { Given, When, Then, setDefaultTimeout, After, Before, context } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect, BrowserContext } from '@playwright/test';

let browser: Browser;
let page: Page;
setDefaultTimeout (60*1000);

    Before(async function () {
      browser = await chromium.launch({headless: false});
      const context = await browser.newContext();
     page = await context.newPage();
    });
             Given('The Sauce Demo URL', async () => {
              await page.goto('https://www.saucedemo.com/');
            });
            When('Enter username as {string}', async function (name) {
                      await page.locator('input[data-test="username"]').fill(name);
                     });
            When('Enter password as {string}', async function(password){
                await page.locator('input[data-test="password"]').fill(password);
            });
            Then('Click on Login buttom', async function () {
                await page.click('input[data-test="login-button"]');
                //await page.waitForTimeout(2000);
            });
            Then('Verify login message as {string}', async function (message) {
                const msg = await page.locator('h3[data-test="error"]').textContent();
                await expect(msg).toEqual(message);
            });
            After(async function () {
                      await browser.close();
                    });