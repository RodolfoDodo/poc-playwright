// @ts-check
const { test, expect } = require("@playwright/test");
const { Demo } = require("../pages/demo");

let demo;

test.beforeEach(async ({ page }) => {
  demo = new Demo(page);
});

test("Login com senha incorreta", async ({ page }) => {
  await demo.acessoPagina();
  await demo.login("dodo", "123");

  const mensagem =
    "Epic sadface: Username and password do not match any user in this service";

  await demo.mensagemErro(mensagem);
});

test("Login com Sucesso", async ({ page }) => {
  await demo.acessoPagina();
  await demo.login("standard_user", "secret_sauce");

  const validar = "Products";

  await expect(page.locator(".product_label")).toHaveText(validar);
});
