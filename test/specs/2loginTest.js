import { browser, $ } from '@wdio/globals'

describe('testtest', () => {
    it('imTestingWithTests', async () => {
        await browser.url('https://www.saucedemo.com/')

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')
        await $('#login-button').click()

        
        await expect(ProductPage.productTitle).toHaveText(expect.stringContaining('Products'));
    })
})