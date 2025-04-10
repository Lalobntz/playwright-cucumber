"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const test_1 = require("@playwright/test");
(0, cucumber_1.Given)('Provide valid URL', function () {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        yield ((_a = this.page) === null || _a === void 0 ? void 0 : _a.goto('https://www.saucedemo.com/')); //se agrega el pageFixture al quitar la parte de let page
    });
});
(0, cucumber_1.When)('Provide valid username and password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.page.locator('input[data-test="username"]').fill('standard_user');
        yield this.page.locator('input[data-test="password"]').fill('secret_sauce');
        yield this.page.click('input[data-test="login-button"]');
    });
});
(0, cucumber_1.Then)('The url will contains the inventory subdirectory', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, test_1.expect)(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });
});
