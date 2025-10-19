import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const GenreRadioCard = ({ title, icon, selected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      activeOpacity={0.8}
      className="bg-[#fcfcfc] rounded-2xl p-2 items-center justify-center m-2 w-[120px] h-[140px] relative shadow-md"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      {/* Runde prik øverst til højre */}
      <View
        className={`absolute top-2 right-2 w-3 h-3 rounded-full border border-[#070707] ${selected ? "bg-[#080808]" : "bg-transparent"
          }`}
      />

      {/* Ikon midt på kortet */}
      <View className="justify-center items-center mt-2">
        {icon}
      </View>

      {/* Genre titel */}
      <Text className="font-bold mt-2 text-center">{title}</Text>
    </TouchableOpacity>
  );
};