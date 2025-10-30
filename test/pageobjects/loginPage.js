import {$} from '@wdio/globals'
import URL from './url.js'

class Login extends URL {

    get usernameInput () {
        // Get username input field
        return $('#user-name');
    }
    get passwordInput() {
        // Get password input field
        return document.querySelector('input#password');
    }
    get loginBttn() {
        // Get login/submit button
        return $('#login-button');
    }

    open(){
        URL.open();
    }
    login(username, password) {
        // input username (variable)
        this.usernameInput.setValue(username);
        // input password (variable)
        this.passwordInput.setValue(password);
        // Click login button
        this.loginBttn.click();
    }

}