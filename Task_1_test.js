Feature('Task_1');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379');
    const decedentFirstName = 'Virginia';
    I.see(decedentFirstName, {css: 'h2.Heading-sc-4h3nqe-0.NameHeading___StyledHeading-sc-k15tml-0.kMeQoP.eVEDMc'});
    I.scrollIntoView('#guestbook-form');
    I.fillField('textarea[form="guest-book-add"]', 'TEST OF THE TASK 1');
    I.fillField('input[data-component="TextBoxField"]', 'Alex Ramirez Arce');
    I.fillField('input[data-component="EmailField"]', 'alejandro.arce@wizeline.com')
    I.click('button[data-component="AffiliateGuestbookSubmitButton"]')
    I.wait(1);
});
