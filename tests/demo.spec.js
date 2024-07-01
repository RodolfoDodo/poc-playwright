// @ts-check
const { test, expect } = require('@playwright/test');

test('Registrar um novo usuário com sucesso', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Preencher campos de texto
  await page.fill('input[placeholder="First Name"]', 'Teste');
  await page.fill('input[placeholder="Last Name"]', 'Sobrenome');
  await page.fill('textarea[ng-model="Adress"]', '1234 Rua Exemplo, Cidade, País');
  await page.fill('input[ng-model="EmailAdress"]', 'teste@example.com');
  await page.fill('input[ng-model="Phone"]', '1234567890');

  // Selecionar gênero
  await page.click('input[value="Male"]'); // ou 'Female' dependendo do gênero que deseja selecionar

  // Selecionar hobbies
  await page.click('input[value="Cricket"]');
  await page.click('input[value="Movies"]');
  await page.click('input[value="Hockey"]');

  // Selecionar habilidades
  await page.selectOption('#Skills', 'Java');

  // Selecionar país
  //await page.selectOption('#countries', 'India');

  // Selecionar país (países selecionáveis)
  await page.click('.select2-selection__arrow');
  await page.type('.select2-search__field', 'Denmark');
  await page.keyboard.press('Enter');

  // Selecionar ano de nascimento
  await page.selectOption('#yearbox', '1990');
  // Selecionar mês de nascimento
  await page.selectOption('select[ng-model="monthbox"]', 'February');
  // Selecionar dia de nascimento
  await page.selectOption('#daybox', '10');

  // Preencher senha e confirmação de senha
  await page.fill('input[ng-model="Password"]', 'Senha@123');
  await page.fill('input[ng-model="CPassword"]', 'Senha@123');

  // Espera por 2 segundos para verificar visualmente (opcional)
  await page.waitForTimeout(2000);

  // Verificação do título da página após registro (opcional)
  // await expect(page).toHaveTitle(/Playwright/);
});
