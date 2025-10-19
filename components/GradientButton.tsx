import React from "react";
import { Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const GradientButton = ({ colors, onPress, text, icon }) => {
  return (
    <View className="flex-1 items-center mb-12 bg-gray-100">
      <Pressable
        onPress={onPress}
        className="w-[75%] h-20 rounded-2xl overflow-hidden">

        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          className="flex-1 items-center rounded-2xl">

          <View className="justify-center items-center mt-2">
            {icon}
          </View>
          <Text className="text-white text-sm font-semibold text-center">
            {text}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}