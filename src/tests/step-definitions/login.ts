//const { Given, When, Then, Before, After, setDefaultTimeout } = require ("@cucumber/cucumber");
//const { chromium, expect } = require("playwright/test");
import { Given, When, Then, After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, Page, chromium,expect } from "@playwright/test";

setDefaultTimeout(60 *1000);
//let page, browser;
//let page, browser;
let page: Page;
let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
});

Given("A web browser is at the saucelabs login page", async () =>{
    await page.goto("https://www.saucedemo.com/");
});
When ('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username: string, password: string) {
    await page.fill('input[data-test="username"]', username);
    await page.fill('input[data-test="password"]', password);
    await page.click('input[data-test="login-button"]');
});
Then('the url will contains the inventory subdirectory', async function () {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

After(async function () {
    await browser.close();
});