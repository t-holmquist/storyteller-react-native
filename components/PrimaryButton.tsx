import React from "react";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";

export const PrimaryButton = ({text, onPress, isLoading } : {text: string, onPress?: () => void, isLoading?: boolean}) => {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        className='bg-accent flex-row gap-2 rounded-full px-4 py-3 flex items-center self-center'>
      
        <Text className='text-white text-xl font-bold'>
          {text}
        </Text>
        {isLoading && (
          <ActivityIndicator color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};


