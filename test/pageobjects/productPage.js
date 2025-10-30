import URL from '../pageobjects/url.js'
import {$} from '@wdio/globals'

class ProductPage extends URL{
    get productTitle() {
        // Get the "Products" title on the products page
        return $('.title')
    }
}

export default new ProductPage();