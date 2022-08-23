const page = require('./page.js');
const callUsButton = {
    locator: 'header button',
    text: 'Call Us'
};
const smsButton = {
    locator: '[class*="ButtonGroup__Container"]',
    text: 'SMS'
};
const tollFreeButton = '[id="toll-free-numbers"]';
const sliders = '[class="ant-slider-step"]';
const closeAndDenyButton = '[aria-label="close and deny"]';
const calculatorSection = 'Switch + Save with Telnyx.';
const saveUpLabel = 'Save up to $';
const phone = '[href*="tel:+"]';
const linkedinLink = '[href*="linkedin"]';
const twitterLink = '[href*="twitter"]';
const facebookLink = '[href*="facebook"]';

class MainPage {

    openMainURL() {
        page.openURL();
    }

    denyCookies() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(closeAndDenyButton).length > 0) {
                page.clickElement(closeAndDenyButton);
            }
        })
    }

    clickCallUsButton() {
        page.clickElementByLocatorText(callUsButton.locator, callUsButton.text);
    }

    clickSMSButton() {
        page.clickElementByLocatorText(smsButton.locator, smsButton.text);
    }

    clickTollFreeButton() {
        page.clickElement(tollFreeButton);
    }

    setSliderValue(index = 0, dose) {
        page.getElementByIndex(sliders, index, 20000).then(($el) => {
            cy.wrap($el).invoke('width').then((len) => {
                let value = len * dose;
                cy.log(len);
                cy.wrap($el).click(value, 0, { force: true });
            })
        })
    }

    scrollToCalculator() {
        page.scrollByText(calculatorSection);
    }

    getSaveUpLabel() {
        return page.getElementByText(saveUpLabel);
    }

    getAttribeFromPhoneNumber(attribute) {
        return page.getAttribute(page.getElement(phone, 20000), attribute);
    }

    getAttribeFromLinkedinLink(attribute) {
        return page.getAttribute(page.getElement(linkedinLink), attribute);
    }

    getAttribeFromTwitterLink(attribute) {
        return page.getAttribute(page.getElement(twitterLink), attribute);
    }

    getAttribeFromFacebook(attribute) {
        return page.getAttribute(page.getElement(facebookLink), attribute);
    }

}
module.exports = new MainPage();