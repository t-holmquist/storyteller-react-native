import { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { CheckImage } from 'data/mistralApi';

export default function TakePhoto(
    { setAnalysedImageText, setImageUri }:
        {
            setAnalysedImageText: React.Dispatch<React.SetStateAction<string>>,
            setImageUri: React.Dispatch<React.SetStateAction<string>>
        }
) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isAnalysingImage, setIsAnalysingImage] = useState<boolean>(false);

    const pickImage = async () => {
        setIsLoading(true)

        try {

            // Gets permission to use the camera
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('For at bruge dit billede til en historie, så skal vi bruge tilladelse til kameraet');
                return;
            }

            let result = await ImagePicker.launchCameraAsync({
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
                // Send the image to create story
                setImageUri(result.assets[0].uri)

                // CALLS THE MISTRAL VISION MODEL HERE
                // Give the Mistral vision model function "CheckImage" the base64 image to return its content
                const base64 = result.assets[0].base64;
                if (typeof base64 === 'string') {
                    // Now it analyses the image
                    setIsAnalysingImage(true)
                    const checkImageResponse = await CheckImage(base64);
                    // Gives the analysed image to create story
                    setAnalysedImageText(checkImageResponse as string)
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
                        <Image source={require('../assets/icons/camera.png')} />
                        <Text>Tag et billede</Text>
                    </>
                )}
            </TouchableOpacity>
        </View>
    );
}
