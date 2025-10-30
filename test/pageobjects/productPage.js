import URL from './url.js'

class ProductPage extends URL{
    get productTitle() {
        document.querySelector('.title')
    }
}