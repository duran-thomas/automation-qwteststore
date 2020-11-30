const PageObjects = require('../pageObjects/pageObjects.page')
loginData = require('../data/data.file')
var assert = require('assert')
const pageObjectsPage = require('../pageObjects/pageObjects.page')

describe("Checkout", () => {
    it("Should add add product to cart and checkout without signing in", () => {
        browser.url('/')
        PageObjects.getProducts(1).click()
        PageObjects.AddToCartButton.click()
        browser.pause(3000)
        browser.url(`${browser.options.baseUrl}/cart/`)
        PageObjects.CheckoutButton.click()
        PageObjects.iframe.waitForDisplayed()
        browser.switchToFrame($('//iframe[@class="stripe_checkout_app"]'))

        PageObjects.enterCheckOutEmail(loginData.email)
        PageObjects.enterCheckoutName(loginData.name)
        PageObjects.enterCheckoutStreet(loginData.street)
        PageObjects.enterCheckoutCity(loginData.city)

        PageObjects.PayButton.click()
        PageObjects.enterCreditCardNumber(loginData.cardNumber)
        PageObjects.enterCvc(loginData.cvc)
        PageObjects.enterExpiryDate(loginData.expDate)
        PageObjects.PayButton.click()

        browser.pause(2000)
    })
    it("Should add add product to cart and checkout while user is signed", () => {
        browser.url('/')

        PageObjects.getNavLinks(2).click()
        PageObjects.enterEmail(loginData.email)
        PageObjects.enterPassword(loginData.password)
        PageObjects.LoginButton.click()
        PageObjects.OrderContainer.waitForDisplayed()

        browser.url('/')
        PageObjects.getProducts(1).click()
        PageObjects.AddToCartButton.click()
        browser.url(`${browser.options.baseUrl}/cart/`)
        PageObjects.CheckoutButton.click()
        browser.pause(3000)
        PageObjects.iframe.waitForDisplayed()
        browser.switchToFrame($('//iframe[@class="stripe_checkout_app"]'))

        PageObjects.enterCheckOutEmail(loginData.email)
        PageObjects.enterCheckoutName(loginData.name)
        PageObjects.enterCheckoutStreet(loginData.street)
        PageObjects.enterCheckoutCity(loginData.city)

        PageObjects.PayButton.click()
        PageObjects.enterCreditCardNumber(loginData.cardNumber)
        PageObjects.enterCvc(loginData.cvc)
        PageObjects.enterExpiryDate(loginData.expDate)
        PageObjects.PayButton.click()

        browser.pause(2000)
    })
})