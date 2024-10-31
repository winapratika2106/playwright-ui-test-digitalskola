class DashboardPage {
  constructor(page) {
      this.page = page;
  }

  async navigate() {
      await this.page.goto('https://www.saucedemo.com/inventory.html');
  }

  async takeScreenshot() {
      return await this.page.screenshot();
  }
}

module.exports = DashboardPage;
