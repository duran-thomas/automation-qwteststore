const PageObjects = require('../pageObjects/pageObjects.page')
loginData = require('../data/data.file')
var assert = require('assert')

describe("Test Application Login Fuctionality", () => {
    it("Attempt to login user with no email and no password", () => {
        browser.url('/')
        PageObjects.getNavLinks(2).click()
        PageObjects.LoginButton.click()
        assert('Email address is required', PageObjects.EmptyEmailFieldError.getText())
        assert('Password is required', PageObjects.EmptyPasswordFieldError.getText())
    })
    it("Attempt to login user with correct email and incorrect password", () => {
        browser.url('/')
        PageObjects.getNavLinks(2).click()
        PageObjects.enterEmail(loginData.email)
        PageObjects.enterPassword(loginData.invalidPassword)
        PageObjects.LoginButton.click()
        PageObjects.ErrorMessage.waitForDisplayed()
        assert('Please check your login details and try again.', PageObjects.ErrorMessageText.getText())
    })
    it("Attempt to login user with correct email and no password", () => {
        browser.url('/')
        PageObjects.getNavLinks(2).click()
        PageObjects.enterEmail(loginData.email)
        PageObjects.LoginButton.click()
        assert('Password is required', PageObjects.EmptyPasswordFieldError.getText())
    })
    it("Attempt to login user with invalid email and correct password", () => {
            browser.url('/')
            PageObjects.getNavLinks(2).click()
            PageObjects.enterEmail(loginData.invalidEmail)
            PageObjects.enterPassword(loginData.password)
            PageObjects.LoginButton.click()
            PageObjects.ErrorMessage.waitForDisplayed()
            assert('Please check your login details and try again.', PageObjects.ErrorMessageText.getText())
    })
        it("Attempt to login user with correct email and correct password", () => {
        browser.url('/')
        PageObjects.getNavLinks(2).click()
        PageObjects.enterEmail(loginData.email)
        PageObjects.enterPassword(loginData.password)
        PageObjects.LoginButton.click()
        PageObjects.OrderContainer.waitForDisplayed()
        expect(browser).toHaveUrl('https://qw-test-store-prod.netlify.app/myaccount/') 
    })

})