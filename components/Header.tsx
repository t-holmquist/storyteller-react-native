import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View className='flex-row justify-between items-center px-3 border-b border-gray-300'>
            <View className='flex-row items-center'>
                <Image className='h-20 w-20' source={require("../assets/logo.png")} />
                <Text className='font-bold'>StoryTeller</Text>
            </View>
            <TouchableOpacity>
                <Image className='w-14 h-14 border border-border rounded-full' source={require("../assets/mathias.webp")} />
            </TouchableOpacity>
        </View>
    )
}