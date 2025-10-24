import OpenAI from "openai";
import { Buffer } from 'buffer';

const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY
});

export const getAudioFromOpenai = async (story: string) => {

    // Gets a blob object back from openai
    const mp3 = await openai.audio.speech.create({
        model: "gpt-4o-mini-tts",
        voice: "shimmer",
        input: story,
        instructions: "Speak in danish",
    });

    // Converting it to an buffer object
    const arrayBuffer = await mp3.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Converting to a base64 string which the useAudioPlayer hook can play
    const dataUri = `data:audio/mpeg;base64,${buffer.toString('base64')}`;

    return dataUri;

}