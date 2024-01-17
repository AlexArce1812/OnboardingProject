const userPage = require('../pages/userPage');
const JanusPersonRecordHelper = require('../helpers/JanusPersonRecord_Helper');
const dotenv = require('dotenv');
dotenv.config();
const { I } = inject();
let person;
// Add in your custom step files

Given('I open virginia page', () => {
  I.amOnPage(process.env.URL);
});

Given('I open the person page', async () => {
  person = await I.getJanusPersonRecord();
  const personId = person.PersonId;
  I.amOnPage(`${process.env.DINAMIC_URL}${personId}`);
});

When('I Scroll down until the Guest Book is visible', () => {
  I.scrollIntoView(userPage.guestBook);
});

Then('I Assert that the decedents first name appears in the Name section', () => {
  I.see('Virginia', userPage.txtName);
});
Then('I Assert that the person name appears in the Name section', async () => {
  const personName = person.FirstName + ' ' + person.MiddleName + ' ' + person.LastName;
  I.see(personName, userPage.txtName)
});
Then('I Leave a Guest Book entry', () => {
  userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
});
Then('I verify the query', () => {
  I.getJanusPersonRecord();
  I.wait(1);
});



