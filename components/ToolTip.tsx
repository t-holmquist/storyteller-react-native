import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export const ToolTips = ({ tooltipText }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <View className="relative flex-row  justify-center items-center mb-8">
            {/*TRIGGER (Trykbar) */}
            <Pressable
                onPressIn={() => setIsVisible(true)}
                onPressOut={() => setIsVisible(false)}>

                <MaterialCommunityIcons
                    name="help-circle"
                    size={28} // Størrelse på ikonet
                    color="withe"
                />
            </Pressable>

            {/*TOOLTIP VISNING */}
            {isVisible && (
                <View className="absolute z-10 left-0 ml-1 top-0">
                    <Text className="p-2 ml-4 text-xs text-white bg-black rounded-lg shadow-lg max-w-xs">
                        {tooltipText}
                    </Text>
                </View>
            )}
        </View>
    )
};