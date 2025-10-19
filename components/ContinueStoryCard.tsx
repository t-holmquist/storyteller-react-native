import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ProgressBar from './ProgressBar'
import { IMAGES } from 'data/images'

export default function ContinueStoryCard() {
  return (
    <View className='relative rounded-2xl p-4 gap-3 bg-white border border-border'>
      <View className='flex-row gap-4'>
        <View className='gap-2'>
          <Text className='text-xl font-bold'>En drage på eventyr</Text>
          {/* Progress bar */}
          <ProgressBar />
          <View className='h-3'></View>
          <TouchableOpacity className='bg-black rounded-full px-4 py-2 flex items-center w-32'>
            <Text className='text-white'>Fortsæt</Text>
          </TouchableOpacity>
        </View>
        <Image className='rounded-lg flex-shrink h-32' source={IMAGES.dragon} />
      </View>
    </View>
  )
}