import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    // Only need bottom safearea since navbar already is withing safe area and this view is rendered below
    <SafeAreaView edges={['bottom']}>
      <View className='min-h-full bg-[#F5EFFF]'>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
}