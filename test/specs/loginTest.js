import Login from './loginPage.js'
import ProductPage from './productPage.js'
import {expect} from '@wdio/globals'
import {browser} from '@wdio/globals'

// v This is broek idk why
// await URL.open;
await browser.url('https://www.saucedemo.com/')

// Login as standard user
await Login.login("standard_user","secret_sauce");
// Assert the product title is existing, and says "Products"
await expect(ProductPage.productTitle).toBeExisting();
await expect(ProductPage.productTitle).toHaveText(expect.stringContaining('Products'));