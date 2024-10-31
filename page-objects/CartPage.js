// class CartPage {
//   constructor(page) {
//       this.page = page;
//       this.cartUrl = 'https://www.saucedemo.com/cart.html'; // URL halaman keranjang
//       this.cartItemSelector = '.cart_item'; // Sesuaikan dengan selector item di keranjang
//   }

//   // Metode navigasi ke halaman keranjang
//   async navigate() {
//       await this.page.goto(this.cartUrl);
//   }

//   // Metode untuk memastikan item ada di keranjang
//   async isItemInCart() {
//       return await this.page.$(this.cartItemSelector) !== null;
//   }

//   // Metode untuk mendapatkan jumlah item di keranjang
//   async getCartItemCount() {
//       const items = await this.page.$$(this.cartItemSelector);
//       return items.length;
//   }
// }

// module.exports = CartPage;

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartUrl = 'https://www.saucedemo.com/cart.html'; // Sesuaikan URL jika berbeda
    }

    async navigate() {
        await this.page.goto(this.cartUrl);
    }

    async isItemInCart() {
        // Tambahkan kode untuk memverifikasi apakah item ada di keranjang
        // Misalnya:
        return await this.page.locator('.cart_item').count() > 0;
    }
}

module.exports = CartPage;
