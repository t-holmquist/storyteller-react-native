import { IMAGES } from "data/images";
import React from "react";
import { View, Text, Image } from "react-native";

export const StoryCard = ({ title, image } : {title: string, image: keyof typeof IMAGES}) => {
  return (

    <View>
      <View className="bg-white gap-2 rounded-xl border border-border items-center w-[180px] h-[280px] mb-10">

        {/* Billede: Fast størrelse, afrunding, margin-bund. */}
        <Image
          source={IMAGES[image]}
          className="w-full h-[180px] flex-shrink rounded-t-xl"
        />

        {/* Titel: Typografi og margin. */}
        <Text className="text-sm font-medium mb-1.5">{title}</Text>
      </View>
    </View>
  );
};