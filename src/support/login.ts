import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { setLoginConstructor, Login, LoginOptions} from '@cucumber/cucumber';

export class CustomLogin implements Login {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    LoginPage: any;

    constructor(options: LoginOptions) {}

    async init() {
        this.browser = await chromium.launch();
        this.browser = await this.browser.newContext();
    }

    async.close() {
        await this.browser?.close();
    }
}

setLoginConstructor(CustomLogin);