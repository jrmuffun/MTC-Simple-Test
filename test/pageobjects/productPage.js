import URL from './url.js'

class ProductPage extends URL{
    get productTitle() {
        // Get the "Products" title on the products page
        document.querySelector('.title')
    }
}