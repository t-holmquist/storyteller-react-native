import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export const SecondaryButton = ({text, onPress } : {text: string, onPress?: () => void}) => {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <TouchableOpacity
        onPress={onPress}
        className="bg-[#818080] p-3 rounded-2xl items-center my-2 w-[45%]"
      >
        <Text className="text-white text-base text-center font-['Helvetica']">
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};