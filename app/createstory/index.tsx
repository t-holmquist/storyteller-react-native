import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CreateStory() {
  return (
    <SafeAreaView edges={['bottom']}>
      <View className='min-h-full bg-[#f7f4f2]'>
        <Text>Create story</Text>
      </View>
    </SafeAreaView>
  )
}