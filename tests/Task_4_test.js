Feature('Task_4');
const data = new DataTable(['url', 'expectedStatusCode']);

data.add(['/virginia-gruchalski-obituary?pid=196167379', 200]);
data.add(['/virginia-gruchalski-obituary?pid=123456789', 404]);

Scenario('create 404 status code response', async ({ I }) => {
  const response = await I.sendGetRequest('/virginia-gruchalski-obituary?pid=123456789');
  console.log('Response:', response);
    I.assertEqual(response.status, 404);
})
Data(data).Scenario('test url status codes',  async ({ I, current }) => {

    const response = await I.sendGetRequest(current.url);
    console.log('Response:', response);
    I.assertEqual(response.status, current.expectedStatusCode);
});
