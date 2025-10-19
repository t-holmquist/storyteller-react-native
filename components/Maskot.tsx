import React from "react";
import { View, Image } from "react-native";


export const Maskot = () => (
  // Wrapper omkring billedet (giver lidt luft omkring)
  <View className="m-2 just items-center">
    <Image
      // Importerer billedfilen fra assets-mappen
      source={require('../assets/mascot.png')}
      
      className="w-32 h-32"
      // Styrer hvordan billedet skal tilpasses (beholder proportioner)
      resizeMode="contain"
    />
  </View>
);