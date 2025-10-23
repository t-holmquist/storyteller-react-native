import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AudioPlayer from "./Audioplayer";

type PopupOverlayProps = {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export const PopupOverlay: React.FC<PopupOverlayProps> = ({
  visible,
  onClose,
  title = "Popup",
  message = "Her kan du vise hvad som helst.",
}) => {
  if (!visible) return null;

  return (
    <View className="absolute inset-0 bg-white justify-center items-center z-50">
      {/* Indholdet i popup'en */}
      <View className="w-11/12 max-w-sm">
        <Text className="text-2xl font-semibold mb-3 text-center">{title}</Text>
        <Text className="text-gray-700 mb-6 text-center">{message}</Text>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            onPress={onClose}
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
