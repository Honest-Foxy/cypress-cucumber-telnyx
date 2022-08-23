const { Given, When, And, Then } = require('@badeball/cypress-cucumber-preprocessor');
const mainPage = require('../pageObjects/main.page');
const supportPage = require('../pageObjects/supportCenter.page');
const sipPage = require('../pageObjects/sip.page');
const idServicesPage = require('../pageObjects/idServices.page');

Given(/^I am on telnyx (.*) page$/, (page) => {
    if (page === 'main') {
        cy.openMainURL();
    } else if (page === 'support center') {
        supportPage.openSupportPage();
    } else if (page === 'SIP') {
        sipPage.openSIPURL();
    } else if (page === 'ID services') {
        idServicesPage.openIDServicesURL();
    }
})

When, And(/^I set the '(.*)' slider to the 1 of length$/, (sliderName) => {
    mainPage.scrollToCalculator();
    let index;
    if (sliderName === 'Make outbound calls' || sliderName === 'Send messages') {
        index = 0;
    } else if (sliderName === 'Receive inbound calls' || sliderName === 'Receive messages') {
        index = 1;
    };
    mainPage.setSliderValue(index, 1);
})

Then(/^I see the 'Save up to \$(.*) per mounth' text$/, (number) => {
    mainPage.getSaveUpLabel().should('contain.text', number);
})

When, And(/^I click the '(.*)' button$/, (button) => {
    let index = 0;
    switch (button) {
        case 'Toll-free numbers':
            mainPage.clickTollFreeButton();
            break;
        case 'SMS':
            mainPage.scrollToCalculator();
            mainPage.clickSMSButton();
            break;
        case 'FAQs about Telnyx':
            supportPage.clickFAQSectionButton();
            break;
        case 'Robocall Mitigation Database and Call Blocking':
            supportPage.clickRobocallButton();
            break;
        case 'Disappointed Emoji':
            supportPage.clickDisappointedEmoji();
            break;
        case 'Getting Started':
            supportPage.clickGettingStartedButton();
            break;
        case 'How to Sign Up for a Telnyx account':
            supportPage.clickHowToSignUpButton();
            break;
        case 'Download CSV':
            sipPage.clickDownloadCSVButton();
            break;
        case 'Talk to sales':
            sipPage.clickTalkToSalesButton();
            break;
        case 'How many simultaneous calls can a SIP Trunk handle?':
            index++;
        case 'How much can I save by using SIP Trunking?':
            index++;
        case 'What is the SIP Trunk price per channel?':
            sipPage.clickPlusButton(index);
            break;
        case 'call us':
            mainPage.clickCallUsButton();
            break;
        default:
            cy.wrap(0).should('eq', 1, 'Click failed');
    }
})

When(/^I click the '(.*)' title button$/, (title) => {
    supportPage.clickTitleButton(title);
})

Then(/^I see the '(.*)' title$/, (title) => {
    supportPage.getTitle().should('contain.text', title);
})

When, And(/^I enter '(.*)' into the '(.*)' field$/, (data, field) => {
    switch (field) {
        case 'search':
            supportPage.searchSupportCenter(data);
            break;
        case 'First name':
            sipPage.scrollToFooterText();
            sipPage.scrollToDownloadCSVSection();
            sipPage.enterFirstName(data);
            break;
        case 'Last name':
            sipPage.enterLastName(data);
            break;
        case 'Email':
            sipPage.enterEmail(data);
            break;
        default:
            cy.wrap(0).should('eq', 1, 'Enter into field failed');
    }
})

Then(/^I see the '(.*)' label$/, (data) => {
    if (data.includes('Search results for')) {
        supportPage.getSearchResult().should('contain.text', data);
    } else if (data === `If you'd like, you can ask the team for help here.`) {
        supportPage.getHelpPopUp(20000).should('contain.text', data);
    } else if (data === `Thank you. We'll email you pricing right away!`) {
        sipPage.getMessage().should('be.visible');
    } else if (data === `Talk to an expert`) {
        sipPage.getTalkToExpertLabel().should('contain.text', data);
    } else if (data === 'expanded text') {
        sipPage.getExpandedText().should('be.visible');
    }
})

Then(/^the '(.*)' element have '(.*)' attribute value '(.*)'$/, (element, attribute, value) => {
    switch (element) {
        case 'here':
            supportPage.getAttributeFromHere(attribute).should('eq', value);
            break;
        case 'phone number':
            mainPage.getAttribeFromPhoneNumber(attribute).should('contain', value);
            break;
        case 'facebook':
            mainPage.getAttribeFromFacebook(attribute).should('eq', value);
            break;
        case 'twitter':
            mainPage.getAttribeFromTwitterLink(attribute).should('eq', value);
            break;
        case 'linkedin':
            mainPage.getAttribeFromLinkedinLink(attribute).should('eq', value);
            break;
    }
})

When(/^I choose the '(.*)' country$/, (country) => {
    sipPage.selectCountry(country);
})

When, And(/^I choose the '(.*)' currency$/, (currency) => {
    sipPage.selectCurrency(currency);
})

Then(/^I see the (.*) price '(.*)'$/, (service, number) => {
    if (service === 'local calls') {
        sipPage.getLocalCallsPrice().should('contain.text', number);
    } else if (service === 'inbound CNAM') {
        idServicesPage.getInboundCNAMPrice().should('contain.text', number);
    }
})