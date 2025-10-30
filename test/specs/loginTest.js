import Login from '../pageobjects/loginPage.js';
import ProductPage from '../pageobjects/productPage.js';
import {expect} from '@wdio/globals'

// Assign all usernames to an array
const usernames = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user"
]
// Assign password (is the same for all users)
const passwd = "secret_sauce"

describe('Positive Test All Users', () => {
    it('should login with ', async () => {
        // For each username, attempt login
        for(const username of usernames) {
            // Open Login page
            await Login.open();
            // Attempt to login with username from array
            await Login.login(username, passwd);
            // If its the locked out user, check a different element
            if(username === "locked_out_user") {
                // Check if the login error element has specific text
                await expect(Login.loginError).toHaveText("Epic sadface: Sorry, this user has been locked out.")
            }
            else{
                // Check the product title on the product page exists
                await expect(ProductPage.productTitle).toExist();
            }
        }
    })
})