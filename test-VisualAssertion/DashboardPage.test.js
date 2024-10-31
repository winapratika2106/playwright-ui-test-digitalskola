const { test, expect } = require('@playwright/test');
const DashboardPage = require('../page-objects/DashboardPage');

test.describe('Dashboard Page Visual Assertions', () => {
    test('Visual assertion for Dashboard Page', async ({ page }) => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.navigate();

        // Mengambil screenshot dari halaman dashboard dan memverifikasinya
        expect(await page.screenshot()).toMatchSnapshot('dashboard-page-snapshot.png');
    });
});
