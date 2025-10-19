import React from "react";
import { View, Text, TextInput } from "react-native";

export const KeyWordInput = ({ title }) => {
    return (
        <View className="items-start w-full px-5 pb-5">


            <Text className="mt-5 mb-3 text-base font-bold text-left">{title}</Text>

            {/* Input felt: w-4/5 = width: 80% */}
            <TextInput
                className="bg-gray-200 p-5 rounded-xl border w-4/5"
                placeholder="skriv her"
                placeholderTextColor="#0f0f0f"
            />
        </View>
    );
};