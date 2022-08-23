const page = require('./page.js');
const countryButton = '[aria-haspopup="listbox"]:not([style])';
const searchInput = '[type="search"]';
const currencyButton = '[aria-haspopup="listbox"][style]';
const closeAndDenyButton = '[aria-label="close and deny"]';
const firstNameInput = '[name="FirstName"]';
const lastNameInput = '[name="LastName"]';
const emailInput = '[name="Email"]';
const downloadCSVButton = '[type="submit"]';
const message = `Thank you. We'll email you pricing right away!`;
const downloadCSVSection = '[id="pricing_download_form"]';
const footerText = '© Telnyx LLC ';
const talkToSalesButton = 'Talk to sales';
const talkToExpertLabel = 'h1';
const plusButtons = '[aria-expanded="false"][aria-controls*="description"]';
const expandedText = 'dd[data-is-open="true"] p';

class SIPPage {

    openSIPURL() {
        page.openURL('/pricing/elastic-sip');
        this.denyCookies();
    }

    enterIntoSearchInput(text) {
        page.addValue(searchInput, `${text}`);
        cy.wait(300);
        page.addValue(searchInput, `{enter}`);
    }

    selectCountry(text) {
        page.clickElement(countryButton);
        this.enterIntoSearchInput(text);
    }

    selectCurrency(text) {
        page.clickElement(currencyButton);
        this.enterIntoSearchInput(text);
    }

    getLocalCallsPrice() {
        return page.getElementByText('Local calls').siblings().eq(0);
    }

    denyCookies() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(closeAndDenyButton).length > 0) {
                page.clickElement(closeAndDenyButton);
            }
        })
    }

    enterFirstName(data) {
        page.addValue(firstNameInput, data, 20000);
    }

    enterLastName(data) {
        page.addValue(lastNameInput, data);
    }

    enterEmail(data) {
        page.addValue(emailInput, data);
    }

    clickDownloadCSVButton() {
        page.clickElement(downloadCSVButton);
    }

    getMessage() {
        return page.getElementByText(message);
    }

    scrollToDownloadCSVSection() {
        page.scrollToElement(downloadCSVSection, 3000);
    }

    scrollToFooterText() {
        page.scrollByText(footerText);
    }

    clickTalkToSalesButton() {
        page.clickElementByText(talkToSalesButton);
    }

    getTalkToExpertLabel() {
        return page.getElement(talkToExpertLabel);
    }

    clickPlusButton(index) {
        page.clickElementByIndex(plusButtons, index);
    }

    getExpandedText() {
        return page.getElement(expandedText);
    }

}
module.exports = new SIPPage();