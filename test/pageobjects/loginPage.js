import {$} from '@wdio/globals'
import URL from '../pageobjects/url.js'

class Login extends URL {

    get usernameInput () {
        // Get username input field
        return $('#user-name');
    }
    get passwordInput() {
        // Get password input field
        return $('input#password');
    }
    get loginBttn() {
        // Get login/submit button
        return $('#login-button');
    }

    open(){
        URL.open();
    }
    async login(username, password) {
        // input username (variable)
        await this.usernameInput.setValue(username);
        // input password (variable)
        await this.passwordInput.setValue(password);
        // Click login button
        await this.loginBttn.click();
    }

}

export default new Login();