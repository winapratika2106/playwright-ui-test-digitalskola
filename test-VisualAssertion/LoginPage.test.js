// const { test, expect } = require('@playwright/test');
// const LoginPage = require('../page-objects/LoginPage');

// test.describe('Login Page Visual Assertions', () => {
//     test('Visual assertion for Login Page', async ({ page }) => {
//         const loginPage = new LoginPage(page);
//         await loginPage.navigate();

//         // Mengambil screenshot dari halaman login dan memverifikasinya
//         expect(await page.screenshot()).toMatchSnapshot('login-page-snapshot.png');
//     });
// });


//code .env
const { test } = require('@playwright/test');
require('dotenv').config();

test('Login test', async ({ page }) => {
  await page.goto(process.env.BASE_URL);
  await page.fill('#username', process.env.USERNAME);
  await page.fill('#password', process.env.PASSWORD);
  await page.click('#login-button');
});
