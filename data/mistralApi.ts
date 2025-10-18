import { Mistral } from '@mistralai/mistralai';

// Initialize the Mistral client with the API key from environment variables
// Here we use Expo which makes sure that we can get the API key from the .env file with the process object.
// ONLY FOR LOCAL DEVELOPMENT - EXPO DOCS STATES THAT THIS KEY WILL BE VISIBLE IN PLAIN TEXT IN THE COMPILED APP
const client = new Mistral({ apiKey: process.env.EXPO_PUBLIC_MISTRAL_API_KEY });

export async function mistralTest() {

    // Sends an array of chat messages to mistral
    const chatResponse = await client.chat.complete({
        model: "mistral-large-latest",
        messages: [{role: 'user', content: 'What is the best French cheese?'}]
    });

    // Logs the response -> Later this should be returned
    console.log('Chat:', chatResponse.choices?.[0]?.message?.content);

}