import { Page } from '@playwright/test';

export class LoginPage {
    contructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(email: string, password: string) {
        await page.fill('input[data-test="username"]', username);
        await page.fill('input[data-test="password"]', password);
        await page.click('input[data-test="login-button"]');
    }
}