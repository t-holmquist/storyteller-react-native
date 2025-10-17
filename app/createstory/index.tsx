import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CreateStory() {
  return (
    <SafeAreaView edges={['bottom']}>
      <View className='min-h-full bg-bg-sand'>
        <Text>Create story</Text>
      </View>
    </SafeAreaView>
  )
}