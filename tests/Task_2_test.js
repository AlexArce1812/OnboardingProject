const userPage = require('../pages/userPage');
const dotenv = require('dotenv');
dotenv.config();

Feature('Task_2');


Scenario('test using POM',  ({ I }) => {
    I.amOnPage(process.env.URL);
    I.see('Virginia', userPage.txtName);
    I.scrollIntoView(userPage.guestBook);
    I.fillField(userPage.txtBoxGuestBookAdd, 'TEST OF THE TASK 2');
    I.fillField(userPage.txtBoxName, 'Alex Ramirez Arce');
    I.fillField(userPage.txtBoxEmail, 'alejandro.arce@wizeline.com');
    I.click(userPage.btnSubmit)
    I.wait(1);
});

Scenario('test using POM with functions',  ({ I }) => {
    I.amOnPage(process.env.URL);
    I.see('Virginia', userPage.txtName);
    I.scrollIntoView(userPage.guestBook);
    userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
    I.wait(1);
});