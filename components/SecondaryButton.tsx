import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export const SecondaryButton = ({buttonTitle } : {buttonTitle: string}) => {
  return (
    <View className="justify-center items-center">
      <TouchableOpacity
        className='bg-black rounded-full px-4 py-2 flex items-center w-32'>
        <Text className="text-white text-base text-center">
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};