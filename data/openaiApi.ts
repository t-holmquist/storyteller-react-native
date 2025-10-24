import OpenAI from "openai";
import { Buffer } from 'buffer';

const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY
});

export const getAudioFromOpenai = async (story: string) => {

    // Gets a blob object back from openai
    const mp3 = await openai.audio.speech.create({
        model: "gpt-4o-mini-tts",
        voice: "marin",
        input: story,
        instructions: `Du skal oplæse en historie for et barn.
        Du skal have en fortællerstemme.`,
    });

    // Converting it to an buffer object
    const arrayBuffer = await mp3.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Converting to a base64 string which the useAudioPlayer hook can play
    const dataUri = `data:audio/mpeg;base64,${buffer.toString('base64')}`;

    return dataUri;

}