const page = require('./page.js');
const titleButtons = 'h2';
const title = 'h1';
const searchResult = '[class="section__content"]';
const searchInput = '[class*="search__input"]';
const faqSectionButtom = 'FAQs about Telnyx ';
const robocallSectionButton = 'Robocall Mitigation Database and Call Blocking';
const disappointedEmoji = '[data-emoji="disappointed"]';
const helpPopUp = '[class*="intercom-block-paragraph"]';
const messageIFrame = '[class*="intercom-borderless-frame intercom"]';
const hereButton = {
    locator: 'article>p>a',
    text: 'here'
};
const gettingStartedButton = 'Getting Started';
const howToSignUpButton = 'How to Sign Up for a Telnyx account';

class SupportCenterPage {

    openSupportPage() {
        page.openURL('support.telnyx.com/en/');
    }

    clickTitleButton(text) {
        page.clickElementByLocatorText(titleButtons, text);
    }

    getTitle() {
        return page.getElement(title);
    }

    searchSupportCenter(keyword) {
        page.addValue(searchInput, `${keyword}{enter}`);
    }

    getSearchResult() {
        return page.getElement(searchResult);
    }

    clickFAQSectionButton() {
        page.clickElementByText(faqSectionButtom);
    }

    clickRobocallButton() {
        page.clickElementByText(robocallSectionButton);
    }

    clickDisappointedEmoji() {
        page.clickElement(disappointedEmoji);
    }

    getHelpPopUp(timeout) {
        return page.findInIFrameByIndex(messageIFrame, helpPopUp, 1, timeout);
    }

    getAttributeFromHere(attribute) {
        return page.getAttribute(page.getElementByLocatorText(hereButton.locator, hereButton.text), attribute);
    }

    clickGettingStartedButton() {
        page.clickElementByText(gettingStartedButton);
    }

    clickHowToSignUpButton() {
        page.clickElementByText(howToSignUpButton);
    }

}
module.exports = new SupportCenterPage();