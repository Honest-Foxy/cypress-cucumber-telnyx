Cypress.Commands.add('openMainURL', () => {
    const mainPage = require('./pageObjects/main.page');
    cy.clearCookies();
    mainPage.openMainURL();
    mainPage.denyCookies();
})