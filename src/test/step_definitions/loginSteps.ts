import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';

  Given('Provide valid URL', async function (this: CustomWorld) {
    await this.page?.goto('https://www.saucedemo.com/')//se agrega el pageFixture al quitar la parte de let page
  });

  When('Provide valid username and password', async function () {
    await this.page.locator('input[data-test="username"]').fill('standard_user')
    await this.page.locator('input[data-test="password"]').fill('secret_sauce')
    await this.page.click('input[data-test="login-button"]')
  });
  
  Then('The url will contains the inventory subdirectory', async function() {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
  });