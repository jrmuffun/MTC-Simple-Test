import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import {browser,expect} from '@wdio/globals'

describe('Simple-Login-Test', () => {
    it('should-login-with-valid-credentials', async () => {
        await browser.url('https://www.saucedemo.com/')

        // Login as standard user
        await Login.login("standard_user","secret_sauce");
        
        // Assert the product title is existing, and says "Products"
        await browser.pause(2000);
        await expect(ProductPage.productTitle).toExist();
    })
})