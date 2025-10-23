import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export const PrimaryButton = ({text, onPress } : {text: string, onPress?: () => void}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        onPress={onPress}
        className='bg-accent rounded-full px-4 py-2 flex items-center w-48 self-center'>
      
        <Text className='text-white text-xl font-bold'>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


