import { View, Text, TouchableOpacity } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { getAudio } from 'data/openaiApi';
import { useState } from 'react';
import { setAudioModeAsync } from 'expo-audio';



export default function AudioPlayer() {

    // Keeps track of the audiosource coming from the Mistral call
    const [audioSource, setAudioSource] = useState('')

    // This hook creates the audioplayer that can be accessed with the "play" method and other properties can be read like "currentTime" e.g
    const player = useAudioPlayer(audioSource);


    // Gets the audio source from Mistral and sets it
    const handleGetAudioSource = async () => {

        const audioSource = await getAudio();

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
                <Text className='text-white'>Get audio</Text>
            </TouchableOpacity>
            {/* If audiosource exists then render a button where it can be played */}
            {audioSource && (
                <TouchableOpacity className='bg-black rounded-lg p-3 w-32 items-center' onPress={handlePlayAudio}>
                    <Text className='text-white'>PlayAudio</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}