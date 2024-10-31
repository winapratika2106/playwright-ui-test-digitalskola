const { test, expect } = require('@playwright/test');
const CartPage = require('../page-objects/CartPage'); // Pastikan path ke CartPage benar

test.describe('Cart Page Tests', () => {
    test('Visual assertion for Cart Page', async ({ page }) => {
        const cartPage = new CartPage(page);

        // Navigasi ke halaman keranjang
        await cartPage.navigate();

        // Lakukan visual assertion di sini, misalnya dengan screenshot
        expect(await page.screenshot()).toMatchSnapshot('cart-page-visual.png');

        // Validasi bahwa item ada di keranjang (jika diperlukan)
        const isItemInCart = await cartPage.isItemInCart();
        expect(isItemInCart).toBeTruthy();
    });
});
