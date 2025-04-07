import { Given, When, Then, setDefaultTimeout, After, Before, context } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test'

let browser: Browser;
let page: Page;
setDefaultTimeout (60*1000);

    Before(async function () {
      browser = await chromium.launch({headless: false});
      const context = await browser.newContext();
      page = await context.newPage();
    });

         Given('Provide valid URL', async () => {
          browser = await chromium.launch({headless: false})
          page = await browser.newPage()
          await page.goto('https://www.saucedemo.com/')//se agrega el pageFixture al quitar la parte de let page
        });

   

         When('Provide valid username and password', async function () {
          await page.locator('input[data-test="username"]').fill('standard_user')
          await page.locator('input[data-test="password"]').fill('secret_sauce')
          await page.click('input[data-test="login-button"]')
         });
         


          Then('The url will contains the inventory subdirectory', async function() {
          await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        });


        After(async function () {
          await browser.close()
        });