class PageObjects {

    getNavLinks(index) { return $(`//div[@class="right menu"]//a[${index}]`)}
    get EmailTextField() { return $('#email') }
    get PasswordTextField() { return $('#password') }
    get LoginButton() { return $('div .ui .segment button') }

    get OrderContainer() {return $('div.header')}
    get ErrorMessage() { return $('div .ui .error .message')}
    get ErrorMessageText() { return $('div .ui .error .message p')}
    get EmptyPasswordFieldError() { return $('div .ui .segment p')}
    get EmptyEmailFieldError() { return $('div .ui .segment p[data-testid="error"]')}

    enterEmail(text){
        this.EmailTextField.waitForDisplayed()
        this.EmailTextField.setValue(text)
    }
    enterPassword(text){
        this.PasswordTextField.waitForDisplayed()
        this.PasswordTextField.setValue(text)
    }
}

module.exports = new PageObjects()