import { View, Text } from 'react-native'
import React from 'react'

export default function ProgressBar() {
    return (
        <View className='relative'>
            <View className="flex rounded-full border border-border p-2">
            </View>
            <View className='absolute justify-center rounded-l-full bg-secondary w-1/3 px-2 h-full'>
                <Text className='text-xs text-white'>30%</Text>
            </View>
        </View>
    )
}