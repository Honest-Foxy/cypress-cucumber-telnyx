const page = require('./page.js');
const searchInput = '[type="search"]';
const currencyButton = '[aria-haspopup="listbox"][style]';
const closeAndDenyButton = '[aria-label="close and deny"]';

class IDServicesPage {

    openIDServicesURL() {
        page.openURL('/pricing/id-services-and-data');
        this.denyCookies();
    }

    enterIntoSearchInput(text) {
        page.addValue(searchInput, text);
        cy.wait(300);
        page.addValue(searchInput, `{enter}`);
    }

    selectCurrency(text) {
        page.clickElement(currencyButton);
        this.enterIntoSearchInput(text);
    }

    getInboundCNAMPrice() {
        return page.getElementByText('Inbound CNAM ').parent().siblings().eq(0);
    }

    denyCookies() {
        cy.wait(1000);
        cy.get('body').then(($body) => {
            if ($body.find(closeAndDenyButton).length > 0) {
                page.clickElement(closeAndDenyButton);
            }
        })
    }

}
module.exports = new IDServicesPage();