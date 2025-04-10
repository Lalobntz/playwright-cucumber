import { expect } from '@playwright/test'
import { chromium, Page, Browser, BrowserContext } from 'playwright';
import { Before, After } from '@cucumber/cucumber'

Before(async function () {
    const browser: Browser = await chromium.launch({headless: false});
    const context: BrowserContext = await browser.newContext()
    const page: Page = await context.newPage()
    
    const currentUrl = page.url();
    expect(currentUrl).toBe('about:blank');

    this.browser = browser;
    this.context = context;
    this.page = page;
})  

After(async function () {

    await this.browser.close()
})