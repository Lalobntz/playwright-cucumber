// support/customWorld.ts
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { ICreateAttachment, ICreateLog, ICreateLink } from "@cucumber/cucumber/lib/runtime/attachment_manager";
import { Browser, BrowserContext, Page } from "playwright";

export interface CustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
}

class CustomWorldImpl implements CustomWorld {
    attach!: ICreateAttachment;
    log!: ICreateLog;
    link!: ICreateLink;
    parameters: any;
    // Permite asignar propiedades dinámicamente si errores de TypeScript}
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    [key: string]: any;
}

setWorldConstructor(CustomWorldImpl);