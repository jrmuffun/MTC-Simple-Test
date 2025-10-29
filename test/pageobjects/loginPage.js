import {$} from '@wdio/globals'
import URL from './url.js'

class Login extends URL {

    get usernameInput () {
        return $('#user-name');
    }

    get passwordInput() {
        return document.querySelector('input#password');
    }

    get loginBttn() {
        return $('#login-button');
    }

    open(){
        URL.open();
    }

}