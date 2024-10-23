const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Buka situs web saucedemo sebelum setiap test
    await page.goto('https://www.saucedemo.com/');
  });

  // a. User success login
  test('User success login', async ({ page }) => {
    await page.fill('#user-name', 'standard_user'); // Input username
    await page.fill('#password', 'secret_sauce'); // Input password
    await page.click('#login-button'); // Click login button
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Check URL setelah login
  });

  // b. Validate user berada di dashboard setelah login
  test('Validate user berada di dashboard setelah login', async ({ page }) => {
    await page.fill('#user-name', 'standard_user'); // Input username
    await page.fill('#password', 'secret_sauce'); // Input password
    await page.click('#login-button'); // Click login button
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // Check URL
    const title = await page.locator('.title').textContent();
    expect(title).toBe('Products'); // Pastikan berada di halaman dashboard
  });

  // c. Add item to cart
  test('Add item to cart', async ({ page }) => {
    await page.fill('#user-name', 'standard_user'); // Input username
    await page.fill('#password', 'secret_sauce'); // Input password
    await page.click('#login-button'); // Click login button
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]'); // Tambahkan item ke cart
    const cartCount = await page.textContent('.shopping_cart_badge'); // Ambil jumlah item di cart
    expect(cartCount).toBe('1'); // Periksa apakah item berhasil ditambahkan
  });

  // d. Validate item sukses ditambahkan ke cart
  test('Validate item sukses ditambahkan ke cart', async ({ page }) => {
    await page.fill('#user-name', 'standard_user'); // Input username
    await page.fill('#password', 'secret_sauce'); // Input password
    await page.click('#login-button'); // Click login button
    await page.click('button[id="add-to-cart-sauce-labs-backpack"]'); // Tambahkan item ke cart
    await page.click('.shopping_cart_link'); // Klik icon cart
    const itemName = await page.locator('.inventory_item_name').textContent();
    expect(itemName).toBe('Sauce Labs Backpack'); // Periksa apakah item yang ditambahkan adalah benar
  });

});
