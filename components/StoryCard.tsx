import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const StoryCard = ({ title, image, buttonTitle }: { title: string, image: string, buttonTitle: string }) => {
  return (

    <View>
      <View className="bg-white gap-2 rounded-xl border border-border items-center w-[180px] h-[270px]">

        {/* Billede: Fast størrelse, afrunding */}
        <Image
          source={image as any}
          className="w-full h-[180px] flex-shrink rounded-t-xl"
        />

        {/* Titel: Typografi og margin. */}
        <Text className="text-sm font-medium mb-1.5">{title}</Text>
        <TouchableOpacity className='bg-black rounded-full px-4 py-2 flex items-center w-32'>
          <Text className='text-white'>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};