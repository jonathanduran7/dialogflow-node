# Dialogflow API Example
This is a simple Node.js application that connects to a Dialogflow agent to detect intents and extract entities from user inputs. It demonstrates how to use Dialogflow's detectIntent API to analyze text queries.

## Prerequisites
Before running the code, ensure you have the following prerequisites installed:
- Node.js: You can download and install Node.js from nodejs.org.
- Google Cloud Project: A project created in Google Cloud Console that has Dialogflow API enabled.
- Service Account Key: A JSON file containing your Google Cloud Service Account credentials, which you will use to authenticate requests.

## Replace Variables in the Code
In the file index.js, replace the following placeholder values:
- your-project-id: Replace with your actual Google Cloud project ID.
- path-to-your-service-account-file.json: Ensure this matches the path to your downloaded JSON key file.

## Troubleshooting
- Permissions Error: If you encounter IAM permission 'dialogflow.sessions.detectIntent' denied, ensure that your service account has the Dialogflow API Client role in the Google Cloud Console.
- Dialogflow API Disabled: Ensure the Dialogflow API is enabled for your Google Cloud project. You can enable it from the APIs & Services > Library section of the Google Cloud Console
