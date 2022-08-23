class Page {

    openURL(url) {
        cy.visit(url == undefined ? '/' : url);
    }

    getElement(element, timeout = 4000) {
        return cy.get(element, { timeout: timeout });
    }

    getElementByIndex(element, index, timeout = 4000) {
        return cy.get(element, { timeout: timeout }).eq(index);
    }

    getElementByText(text) {
        return cy.contains(text);
    }

    getElementByLocatorText(locator, text) {
        return this.getElement(locator).contains(text);
    }

    clickElement(element) {
        this.getElement(element).click();
    }

    clickElementByIndex(element, index) {
        this.getElementByIndex(element, index).click();
    }

    clickElementByText(text) {
        this.getElementByText(text).click();
    }

    clickElementByLocatorText(locator, text) {
        this.getElementByLocatorText(locator, text).click();
    }

    addValue(element, text, timeout) {
        this.getElement(element, timeout).type(text);
    }

    scrollByText(text) {
        this.getElementByText(text).scrollIntoView();
    }

    scrollToElement(element, duration = 0) {
        this.getElement(element).scrollIntoView({ duration: duration });
    }

    findInIFrameByIndex(iframe, element, index, timeout = 4000) {
        return cy.get(iframe, { timeout: timeout })
            .its('0.contentDocument.body').should('not.be.empty')
            .then(cy.wrap)
            .find(element, { timeout: timeout }).eq(index);
    }

    getAttribute(element, attribute) {
        return element.invoke('attr', attribute);
    }

}
module.exports = new Page();