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
    get CheckoutButton() { return $('div span button')}


    get CreditCardTextField() { return $('div input[placeholder="Card number"]')}
    get ExpDateTextField() { return $('div input[placeholder="MM / YY"]')}
    get CardCvcTextField() { return $('div input[placeholder="CVC"]')}

    get CheckoutEmail() { return $('//form[@class="Modal-form"]//input[1]')}
    
    get CheckoutName() { return $('div input[placeholder="Name"]')}
    get CheckoutStreetTextField() { return $('div input[placeholder="Street"]')}
    get CheckoutCityTextField() { return $('div input[placeholder="City"]')}
    
    get iframe() { return $('//iframe[@class="stripe_checkout_app"]')}

    get PayButton() { return $('div .Section-button button')}

    

    enterEmail(text){
        this.EmailTextField.waitForDisplayed()
        this.EmailTextField.setValue(text)
    }
    enterPassword(text){
        this.PasswordTextField.waitForDisplayed()
        this.PasswordTextField.setValue(text)
    }

    enterCheckOutEmail(text){
        this.CheckoutEmail.setValue(text)
    }

    enterCheckoutName(text){
        this.CheckoutName.waitForDisplayed()
        this.CheckoutName.setValue(text)
    }

    enterCheckoutStreet(text){
        this.CheckoutStreetTextField.waitForDisplayed()
        this.CheckoutStreetTextField.setValue(text)
    }

    enterCheckoutCity(text){
        this.CheckoutCityTextField.waitForDisplayed()
        this.CheckoutCityTextField.setValue(text)
    }

    enterCreditCardNumber(text){
        this.CreditCardTextField.waitForDisplayed()
        this.CreditCardTextField.setValue(text)
    }

    enterExpiryDate(text){
        this.ExpDateTextField.setValue(text)
    }

    enterCvc(text){
        this.CardCvcTextField.setValue(text)
    }
}

module.exports = new PageObjects()