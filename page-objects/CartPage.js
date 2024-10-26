class CartPage {
    constructor(page) {
      this.page = page;
      this.cartBadge = '.shopping_cart_badge';
      this.cartLink = '.shopping_cart_link';
      this.itemName = '.inventory_item_name';
    }
  
    async addItemToCart(itemSelector) {
      await this.page.click(itemSelector);
    }
  
    async goToCart() {
      await this.page.click(this.cartLink);
    }
  
    async validateItemInCart(expectedItemName) {
      const itemName = await this.page.textContent(this.itemName);
      return itemName === expectedItemName;
    }
  }
  
  module.exports = { CartPage };
  