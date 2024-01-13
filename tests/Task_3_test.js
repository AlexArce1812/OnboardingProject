const userPage = require('../pages/userPage');
const JanusPersonRecordHelper = require('../helpers/JanusPersonRecord_Helper')
const dotenv = require('dotenv');
dotenv.config();

Feature('Task_3');

Scenario('dinamic test @GuestBook', async ({ I }) => {
    I.amOnPage(process.env.URL);
    I.see('Virginia', userPage.txtName);
    I.scrollIntoView(userPage.guestBook);
    userPage.fill_guest_book_and_submit('TEST OF THE TASK 2','Alex Ramirez Arce','alejandro.arce@wizeline.com')
    I.getJanusPersonRecord();
    I.wait(1);
}).tag('@onboardingProject').tag('@webDriver').tag('@productionSafe').tag('@QueryRequest')
