class PageObjects {

    getNavLinks(index) { return $(`//div[@class="right menu"]//a[${index}]`)}
    getProducts(index) { return $(`//div[@class="ui stackable two cards"]//a[${index}]`)}

    get ProductsParent() { return $('div .ui .stackable .two .cards')}
    get ProductChildElements() { }

    get EmailTextField() { return $('#email') }
    get PasswordTextField() { return $('#password') }
    get SuccessMessage() { return $('div .fade .transition')}

    get LoginButton() { return $('div .ui .segment button') }
    get AddToCartButton() { return $('button')}

    get OrderContainer() {return $('div.header')}
    get ErrorMessage() { return $('div .ui .error .message')}
    get ErrorMessageText() { return $('div .ui .error .message p')}
    get EmptyPasswordFieldError() { return $('div .ui .segment p')}
    get EmptyEmailFieldError() { return $('div .ui .segment p[data-testid="error"]')}

    get ProductCartPrice() { return $('div .meta') }
    get ProductName() { return $('div .header a')}
    

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