const dotenv = require('dotenv');
dotenv.config();

Feature('Task_1 #depr');

Scenario('test task 1',  ({ I }) => {
    I.amOnPage(process.env.URL);
    I.see('Virginia', {css: 'h2[data-component="NameHeadingText"]'});
    I.scrollIntoView('#guestbook-form');
    I.fillField('textarea[form="guest-book-add"]', 'TEST OF THE TASK 1');
    I.fillField('input[data-component="TextBoxField"]', 'Alex Ramirez Arce');
    I.fillField('input[data-component="EmailField"]', 'alejandro.arce@wizeline.com');
    I.click('button[data-component="AffiliateGuestbookSubmitButton"]')
    I.wait(1);
})