import { Mistral } from '@mistralai/mistralai';

// Initialize the Mistral client with the API key from environment variables
// Here we use Expo which makes sure that we can get the API key from the .env file with the process object.
// ONLY FOR LOCAL DEVELOPMENT - EXPO DOCS STATES THAT THIS KEY WILL BE VISIBLE IN PLAIN TEXT IN THE COMPILED APP
const client = new Mistral({ apiKey: process.env.EXPO_PUBLIC_MISTRAL_API_KEY });

export async function generateStoryWithMistral(genre: string, analyzedImageText: string) {

    // Sends an array of chat messages to mistral
    const chatResponse = await client.chat.complete({
        model: "mistral-large-latest",
        messages: [
            {
                role: 'user', content:
                    `Skriv første kapitel af en børnehistorie på dansk. Den skal maksimalt være 110 ord lang.
                Du skal overholde følgende: Genren skal være ${genre}. Du skal lave en title til historien på maks 4 ord. 
                Du skal returne et output i dette specifikke JSON format: 
                {"titel": "Titlen her",
                "historie": "Historien her"}. Historien skal tage udgangspunkt i følgende beskrivelse af et billede, som et barn gerne vil have
                skal indgå i historien som et centralt element. Her er beskrivelsen: ${analyzedImageText}.`
            },
        ],
        // Gets the response as JSON instead of string, allowing us to get the title and story separately
        responseFormat: {type: 'json_object'},
    });

    // Returns the response
    return chatResponse.choices?.[0]?.message?.content

}


// Scans an image for objects and returns a string with a desciption of the image
export const CheckImage = async (imageInBase64: Base64URLString) => {


    // Calls the model with the base64 image from the imagepicker component
    const chatResponse = await client.chat.complete({
        model: "mistral-small-2506",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "What's in this image?" },
                    {
                        type: "image_url",
                        imageUrl: "data:image/jpeg;base64," + imageInBase64,
                    },
                ],
            },
        ],
    });

    return (chatResponse.choices[0].message.content)

}


