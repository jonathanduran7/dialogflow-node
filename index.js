const dialogflow = require('dialogflow');
const uuid = require('uuid');
const dotenv = require('dotenv');

const projectId = dotenv.config().parsed.PROJECT_ID || 'your-project-id';
const sessionId = uuid.v4();
const sessionClient = new dialogflow.SessionsClient({
  keyFilename: dotenv.config().parsed.KEY_FILE_PATH || 'your-key-file-path'
});

async function runSample() {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: 'hoy pague 4 mil pesos la cancha con mercadopago',
        languageCode: 'es',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`Query: ${result.queryText}`);
  console.log(`Response: ${result.fulfillmentText}`);
  console.log(`Detected intent: ${result.intent.displayName}`);
  console.log(`Entities:`, result.parameters.fields);
}

runSample();

