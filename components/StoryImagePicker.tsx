import { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function StoryImagePicker() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pickImage = async () => {
    setIsLoading(true)

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    setIsLoading(false)
  };

  return (
    <View className='gap-6'>
      <TouchableOpacity
        onPress={pickImage}
        activeOpacity={1}
        className='flex-row self-start items-center gap-2 border border-border bg-white rounded-xl p-4'>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Image source={require('../assets/icons/image.png')} />
            <Text className='font-semibold'>Vælg dit billede</Text>
          </>
        )}
      </TouchableOpacity>
      <View className='gap-2'>
        {image && (
          <>
            <Text className='font-bold text-primary'>Sejt billede!</Text>
            <Image source={{ uri: image }} className='w-80 h-80 rounded-xl border border-accent' />
          </>
        )}
      </View>
    </View>
  );
}
