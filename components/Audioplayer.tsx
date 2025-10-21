import { View, Text, TouchableOpacity } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { getAudioFromOpenai } from 'data/openaiApi';
import { useState } from 'react';
import { setAudioModeAsync } from 'expo-audio';



export default function AudioPlayer() {

    // Keeps track of the audiosource coming from the Mistral call
    const [audioSource, setAudioSource] = useState('')
    // TODO: Lav en isPlaying usestate hook her

    // This hook creates the audioplayer that can be accessed with the "play" method and other properties can be read like "currentTime" e.g
    const player = useAudioPlayer(audioSource);


    // Gets the audio source from Mistral and sets it
    const handleGetAudioSource = async () => {

        // TODO: getAudio skal modtage en historie som skal oplæses
        // TODO: Selve audioplayeren skal modtage en historien som en prop til componentet der skal ligge på create siden
        const audioSource = await getAudioFromOpenai();

        // Allows playback on iOS when silent mode is turned on
        await setAudioModeAsync({
            playsInSilentMode: true,
        });

        setAudioSource(audioSource)

    }

    // Plays the audio and reset time to 0 on each call
    const handlePlayAudio = () => {

        player.seekTo(0);
        player.play()

    }

    return (
        <View className='gap-12'>
            <TouchableOpacity className='bg-black rounded-lg p-3 w-32 items-center' onPress={handleGetAudioSource}>
                <Text className='text-white'>Oplæsning</Text>
            </TouchableOpacity>
            {/* If audiosource exists then render a button where it can be played */}
            {/* TODO: Her skal vi rendere en playknap og tid hvis der findes en audiosource (dvs. hvis kaldet til openai er gået igennem) */}
            {/* TODO: Hvis data ikke er kommet igennem skal der renderes en Activityindicator, som er en loading spinner (se react native docs) */}
            {audioSource && (
                <TouchableOpacity className='bg-black rounded-lg p-3 w-32 items-center' onPress={handlePlayAudio}>
                    <Text className='text-white'>PlayAudio</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}