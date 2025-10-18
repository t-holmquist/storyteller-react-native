import OpenAI from "openai";
import { Buffer } from 'buffer';


const openai = new OpenAI({
    apiKey: process.env.EXPO_PUBLIC_OPENAI_API_KEY
});

export const getAudio = async () => {

    // Gets a blob object back from openai
    const mp3 = await openai.audio.speech.create({
        model: "gpt-4o-mini-tts",
        voice: "coral",
        input: "Today is a wonderful day to build something people love!",
        instructions: "Speak in a cheerful and positive tone.",
    });

    // Converting it to an buffer object
    const arrayBuffer = await mp3.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Converting to a base64 string which the useAudioPlayer hook can play
    const dataUri = `data:audio/mpeg;base64,${buffer.toString('base64')}`;

    return dataUri;

}


