import { Locators } from "../data/data.js";
import { BasePage } from "./base/BasePage.js";
import { expect, test   } from "@playwright/test";

export class LoginPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.nameInput = page.getByRole("textbox", { name: Locators.selectores.login.nameInput });
        this.passInput = page.getByRole("textbox", { name: Locators.selectores.login.passInput });
        this.btnLogin = page.getByRole("button", { name: Locators.selectores.login.btnLogin });
        this.titleProducts = page.getByTestId(Locators.selectores.products.title);
    }

    async loginExitoso(user = Locators.credenciales.userName, pass = Locators.credenciales.userPass) {
        await this.nameInput.fill(user);
        await this.passInput.fill(pass);
        await this.btnLogin.click();

        await expect(this.titleProducts).toBeVisible();
    }
}
