import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';
    
    Given('The Sauce Demo URL', async function (this: CustomWorld) {
        await this.page?.goto('https://www.saucedemo.com/');
    });

    When('Enter username as {string}', async function (name) {
        await this.page.locator('input[data-test="username"]').fill(name);
    });

    When('Enter password as {string}', async function(password){
        await this.page.locator('input[data-test="password"]').fill(password);
    });

    Then('Click on Login buttom', async function () {
        await this.page.click('input[data-test="login-button"]');
        //await page.waitForTimeout(2000);
    });

    Then('Verify login message as {string}', async function (message) {
        const msg = await this.page.locator('h3[data-test="error"]').textContent();
        expect(msg).toEqual(message);
    });