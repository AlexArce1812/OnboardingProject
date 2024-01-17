const { I } = inject();
// Add in your custom step files
Given('I going to check the urls {string}', (url) => {
  I.currentUrl = url;
});
Then('I check the status code {string}', async (expectedStatusCode) => {
  const currentUrl = I.currentUrl;
  const response = await I.sendGetRequest(currentUrl);
  //console.log('Response:', response);
  I.assertEqual(response.status, parseInt(expectedStatusCode));
});

