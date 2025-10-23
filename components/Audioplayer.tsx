import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAudioPlayer } from 'expo-audio';
import { getAudioFromOpenai } from 'data/openaiApi';
import { useState } from 'react';
import { setAudioModeAsync } from 'expo-audio';
import { MaterialIcons } from '@expo/vector-icons';

export default function AudioPlayer({ story }: { story: string }) {

    // Keeps track of the audiosource coming from the Mistral call
    const [audioSource, setAudioSource] = useState('')
    // TODO: Lav en isPlaying usestate hook her
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    // This hook creates the audioplayer that can be accessed with the "play" method and other properties can be read like "currentTime" e.g
    const player = useAudioPlayer(audioSource);

    // Gets the audio source from Mistral and sets it
    const handleGetAudioSource = async () => {
        setIsLoading(true)
        // TODO: getAudio skal modtage en historie som skal oplæses
        const audio = await getAudioFromOpenai(story);

        // Allows playback on iOS when silent mode is turned on
        await setAudioModeAsync({
            playsInSilentMode: true,
        });

        setAudioSource(audio)
        setIsLoading(false)
    }

    // TODO: If/else i handlePlayAudio
    const handlePlayAudio = () => {
        if (isPlaying) {
            // Hvis audio allerede spiller, så pause den
            player.pause();
            setIsPlaying(false);
        } else {
            // Hvis audio ikke spiller, så start fra begyndelsen
            player.seekTo(0);
            player.play();
            setIsPlaying(true);
        }

    }

    return (
        <View className="gap-4">
  {/* Knapperne på samme linje */}
  <View className="flex-row gap-4">
    <TouchableOpacity
      className="bg-black rounded-lg p-3 w-30 items-center justify-center"
      onPress={handleGetAudioSource}
    >
      <Text className="text-white font-bold">Oplæsning</Text>
    </TouchableOpacity>

    {/* Play/Pause knap, vises kun hvis audioSource findes */}
    {audioSource && !isLoading && (
      <TouchableOpacity
        className={`rounded-lg p-3 w-28 flex-row items-center justify-center ${
          isPlaying ? "bg-primary" : "bg-accent"
        }`}
        onPress={handlePlayAudio}
      >
        <MaterialIcons
          name={isPlaying ? "pause" : "play-arrow"}
          size={24}
          color="white"
        />
        <Text className="text-white ml-2 font-semibold">
          {isPlaying ? "Pause" : "Play"}
        </Text>
      </TouchableOpacity>
    )}

    {/* Loader under knapperne */}
  {isLoading && <ActivityIndicator size="large" color="accent" />}
  </View>

  
</View>

    );
}
