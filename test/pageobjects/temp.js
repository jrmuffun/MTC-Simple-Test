import {browser} from '@wdio/globals'

class URL {
    @param path

    open(path) {
        return browser.url("https://www.saucedemo.com/")
    }
}