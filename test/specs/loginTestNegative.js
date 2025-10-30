import Login from '../pageobjects/loginPage.js';
import {expect} from '@wdio/globals'

describe('Simple Login Test Negative', () => {
    it('should not login with invalid credentials', async () => {
        // Open login page
        await Login.open();
        // Attempt Login with invalid user
        await Login.login("invalid_user","invalid_password");

        // Assert the invalid login alert
        await expect(Login.loginError).toExist();
        await expect(Login.loginError).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})