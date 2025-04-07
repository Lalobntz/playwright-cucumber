import { chromium, Page, Browser, expect, BrowserContext } from '@playwright/test'
import { BeforeAll, AfterAll } from '@cucumber/cucumber'
import { pageFixture } from './pageFixture';

let browser: Browser;
let context:BrowserContext;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
    context = await browser.newContext()
    page = await context.newPage()
    pageFixture.page = await page;
})  

AfterAll(async function () {
    await pageFixture.page.close()
    await context.close()
    await browser.close()
})