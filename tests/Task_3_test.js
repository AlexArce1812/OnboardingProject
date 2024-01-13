const userPage = require('../pages/userPage');
const JanusPersonRecordHelper = require('../helpers/JanusPersonRecord_Helper')
const dotenv = require('dotenv');
dotenv.config();

Feature('Task_3');

Scenario('dinamic test', async ({ I }) => {
    I.amOnPage(process.env.URL);
    I.see('Virginia', userPage.txtName);
    I.scrollIntoView(userPage.guestBook);
    userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
    I.getJanusPersonRecord();
    I.wait(1);
}).tag('@onboardingProject').tag('@webDriver').tag('@productionSafe').tag('@QueryRequest')

Scenario('dinamic test with data from the DB @GuestBook', async ({ I }) => {
    const person = await I.getJanusPersonRecord();
    const personId = person.PersonId;
    const personName = person.FirstName + ' ' + person.MiddleName + ' ' + person.LastName;

    I.amOnPage(`${process.env.DINAMIC_URL}${personId}`);
    I.see(personName, userPage.txtName)
    I.scrollIntoView(userPage.guestBook);
    userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
})

