import { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { CheckImage } from 'data/mistralApi';

export default function StoryImagePicker(
  { setAnalysedImageText }:
    { setAnalysedImageText: React.Dispatch<React.SetStateAction<string>> }
) {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFinishedAnalysing, setIsFinishedAnalysing] = useState<boolean>(false);
  const [isAnalysingImage, setIsAnalysingImage] = useState<boolean>(false);

  const pickImage = async () => {
    setIsLoading(true)
    // Set is finished analysing image false on call if the user tries to upload a new image and one is already loaded
    setIsFinishedAnalysing(false)

    try {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        // Get the image in base64 format so that we can call mistral vision model
        // Which expect that format
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });

      // If the user succesfully chose an image then set the image uri
      if (!result.canceled) {
        setImage(result.assets[0].uri);

        // CALLS THE MISTRAL VISION MODEL HERE
        // Give the Mistral vision model function "CheckImage" the base64 image to return its content
        const base64 = result.assets[0].base64;
        if (typeof base64 === 'string') {
          // Now it analyses the image
          setIsAnalysingImage(true)
          const checkImageResponse = await CheckImage(base64);
          // Gives the analysed image to create story
          setAnalysedImageText(checkImageResponse as string)
          setIsFinishedAnalysing(true)
        } else {
          console.warn('Selected asset does not contain base64 data.');
        }
      }
    } finally {
      setIsLoading(false)
      setIsAnalysingImage(false)
    }
  };

  return (
    <View className='gap-6'>
      <TouchableOpacity
        onPress={pickImage}
        activeOpacity={1}
        className='flex-row self-start items-center gap-2 border border-border bg-white rounded-xl p-4'>
        {/* If loading then show loading indicator else show image selection */}
        {isLoading ? (
          <>
            <ActivityIndicator />
            {isAnalysingImage && (
                <Text className='font-semibold'>Analyserer billedet...</Text>
            )}
          </>
        ) : (
          <>
            <Image source={require('../assets/icons/image.png')} />
            <Text className='font-semibold'>Vælg dit billede</Text>
          </>
        )}
      </TouchableOpacity>
      <View className='gap-2'>
        {/* If image exists (the user chose an image) then show it */}
        {image && isFinishedAnalysing && (
          <>
            <Text className='font-bold text-primary'>Sejt billede!</Text>
            <Image source={{ uri: image }} className='w-80 h-80 rounded-xl border border-accent' />
          </>
        )}
      </View>
    </View>
  );
}
