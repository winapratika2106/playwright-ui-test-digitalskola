class DashboardPage {
    constructor(page) {
      this.page = page;
      this.title = '.title';
    }
  
    async validateDashboard() {
      return await this.page.textContent(this.title) === 'PRODUCTS';
    }
  }
  
  module.exports = { DashboardPage };
  