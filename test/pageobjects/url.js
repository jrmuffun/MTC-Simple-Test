import {browser} from '@wdio/globals'

export default class URL {
    open() {
        return browser.url("https://www.saucedemo.com/")
    }
}