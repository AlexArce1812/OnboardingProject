const userPage = require('../pages/userPage');
const dotenv = require('dotenv');
dotenv.config();
const { I } = inject();
// Add in your custom step files

Given('I open virginia page', () => {
  I.amOnPage(process.env.URL);
});
When('I Assert that the decedents first name appears in the Name section', () => {
  I.see('Virginia', userPage.txtName);
});
When('I Scroll down until the Guest Book is visible', () => {
  I.scrollIntoView(userPage.guestBook);
});
Then('I Leave a Guest Book entry', () => {
  userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
  I.wait(1);
});


