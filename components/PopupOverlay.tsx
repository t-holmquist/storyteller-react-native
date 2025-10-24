import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AudioPlayer from "./Audioplayer";

export const PopupOverlay = (
  { storyTitle, storyDescription, onPress, imageUri }:
    // Typescript type definitions
    { storyTitle: string, storyDescription: string, onPress: () => void, imageUri: string }

) => {

  console.log(imageUri)


  return (
    <View className="absolute inset-0 bg-white py-4 items-center z-50">
      {/* Indholdet i popup'en */}
      <View className="p-4 gap-3">
        <View className="h-80">
          <Image style={{width: '100%', height: '100%'}} className="flex-shrink rounded-xl" source={{ uri: imageUri }} />
        </View>
        <Text className="text-2xl font-semibold mb-3 text-center">{storyTitle ? storyTitle : 'Test'}</Text>
        <Text className="text-gray-700 mb-6">{storyDescription ? storyDescription : 'kldskfls lskdflskdf fklsdkflskdlfksasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdldfklsdfklsdkflsdkflskdflsdkf kflsdkflskdflsdkfls ksldfksldkflsdkflsdkfl'}</Text>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={onPress}
            className="bg-black rounded-lg w-28 h-12 justify-center"
          >
            <Text className="text-white font-bold text-center">Luk</Text>
          </TouchableOpacity>

          <AudioPlayer
            story={storyDescription}
          />
        </View>

      </View>
    </View>
  );
};
