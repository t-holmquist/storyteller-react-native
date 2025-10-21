import React from "react";
import { View, TextInput } from "react-native";

export const KeyWordInput = ({ placeholder }: {placeholder: string}) => {
    return (
        <View>
            <TextInput
                className="bg-white p-4 rounded-xl border border-border w-4/5"
                placeholder={placeholder}
            />
        </View>
    );
};