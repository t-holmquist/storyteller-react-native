import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IMAGES } from 'data/images'
import { GenreRadioCard } from 'components/GenreRadioCard'

export default function CreateStory() {
  return (
    <SafeAreaView edges={['bottom']}>
      <View className='min-h-full bg-bg-sand py-7 px-4 gap-4'>
              <View className='gap-3 mb-2'>
                <Text className='text-3xl font-extrabold text-primary'>Lad os være kreative✍️</Text>
                <Text className='text-sm'>Vælg emner til din historie og tryk på skab historie. Jeg er spændt på, hvad du finder på!</Text>
              </View>
              {/* Continue story section */}
              <View className='gap-2'>
                <Text className='text-xl font-bold'>Vælg en genre:</Text>
                <GenreRadioCard title="Sørøver"/>
              </View>
              {/* Read again section */}
              <View className='gap-2'>
                <Text className='text-xl font-bold'>Læs en god historie igen</Text>
                
              </View>
              <TouchableOpacity className='bg-accent rounded-full px-4 py-2 flex items-center w-48 self-center'>
                <Text className='text-white text-xl font-bold'>Skab din historie</Text>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}