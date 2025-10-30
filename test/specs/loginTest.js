import Login from './loginPage.js'
import ProductPage from './productPage.js'
import {expect} from '@wdio/globals'
import {browser} from '@wdio/globals'

// await URL.open;
await browser.url('https://www.saucedemo.com/')

await Login.login("standard_user","secret_sauce");
await expect(ProductPage.productTitle).toBeExisting();
await expect(ProductPage.productTitle).toHaveText(expect.stringContaining('Products'));