import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AudioPlayer from "./Audioplayer";

export const PopupOverlay = (
  {title, message, onPress} : 
  // Typescript type definitions
  {title: string, message: string, onPress: () => void}

) => {

  return (
    <View className="absolute inset-0 bg-white justify-center items-center z-50">
      {/* Indholdet i popup'en */}
      <View className="w-11/12 max-w-sm">
        <Text className="text-2xl font-semibold mb-3 text-center">{title}</Text>
        <Text className="text-gray-700 mb-6 text-center">{message}</Text>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
          onPress={onPress}
            className="bg-black rounded-lg w-28 h-12 justify-center"
          >
            <Text className="text-white font-bold text-center">Luk</Text>
          </TouchableOpacity>

          <AudioPlayer
            story="Jeg er en lille frø - der bor i en lille grøn annedam i Nordjylland - jeg kan godt lide at svømme hele dagen"
          />
        </View>

      </View>
    </View>
  );
};
