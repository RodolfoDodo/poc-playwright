const { expect } = require("@playwright/test");

export class Demo {
  constructor(page) {
    this.page = page;
  }

  async acessoPagina() {
    await this.page.goto("https://www.saucedemo.com/v1/");
    await expect(await this.page.title()).toBe('Swag Labs')
  }

  async login(name, password) {
    await this.page.fill("#user-name", name);
    await this.page.fill("#password", password);
    await this.page.click("#login-button");
  }

  async mensagemErro(mensagem) {
    // Verifica se a mensagem de erro é a esperada
    await expect(this.page.locator('[data-test="error"]')).toHaveText(mensagem);
  }

  
   
}
