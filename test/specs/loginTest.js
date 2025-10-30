import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import {expect} from '@wdio/globals'

describe('Simple-Login-Test', () => {
    it('should-login-with-valid-credentials', async () => {
        // Open login page
        await Login.open();
        // Login as standard user
        await Login.login("standard_user","secret_sauce");
        // Expect the product title is existing, and says "Products"
        await expect(ProductPage.productTitle).toExist();
        await expect(ProductPage.productTitle).toHaveText("Products");
    })
})