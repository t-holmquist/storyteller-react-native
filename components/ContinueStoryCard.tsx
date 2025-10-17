import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ContinueStoryCard() {
  return (
    <View className='relative border rounded-2xl p-4 gap-3 border-border'>
      <Text className='text-xl font-'>En drage på eventyr</Text>
      <TouchableOpacity className='bg-primary rounded-full px-4 py-2 flex items-center w-40'>
        <Text className='text-white'>Fortsæt historie</Text>
      </TouchableOpacity>
    </View>
  )
}