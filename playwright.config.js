// const { defineConfig } = require('@playwright/test');

// module.exports = defineConfig({
//     testDir: './tests',               // Direktori untuk menyimpan file pengujian
//     snapshotPath: './snapshots',      // Direktori untuk menyimpan snapshot
//     use: {
//         headless: true,               // Menjalankan tes di mode headless
//         viewport: { width: 1280, height: 720 },  // Ukuran layar saat tes
//         screenshot: 'only-on-failure' // Ambil screenshot saat ada kegagalan
//     },
//     reporter: 'html',                 // Hasil laporan dalam format HTML
// });



// const { defineConfig } = require('@playwright/test');

// module.exports = defineConfig({
//     projects: [
//         { name: 'Chromium', use: { browserName: 'chromium' } },
//         { name: 'Firefox', use: { browserName: 'firefox' } },
//         { name: 'WebKit', use: { browserName: 'webkit' } },
//     ],
// });



require('dotenv').config();

const config = {
  use: {
    baseURL: process.env.BASE_URL,
    browserName: 'chromium', // contoh lain
    headless: true,
  },
};

module.exports = config;


