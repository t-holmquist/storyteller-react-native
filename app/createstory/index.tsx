import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GenreSelector } from 'components/GenreSelector'

export default function CreateStory() {

  const [genre, setGenre] = useState('')


  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView>
        <View className='min-h-full bg-bg-sand py-7 px-4 gap-4'>
          <View className='gap-3 mb-2'>
            <Text className='text-3xl font-extrabold text-primary'>Lad os være kreative✍️</Text>
            <Text className='text-sm'>Vælg emner til din historie og tryk på skab historie. Jeg er spændt på, hvad du finder på!</Text>
          </View>
          {/* Genre selection. Gets the setter state function */}
          <View className='gap-2'>
            <Text className='text-xl font-bold'>Vælg et tema📚</Text>
            <GenreSelector setGenre={setGenre} />
          </View>
          {/* Another section */}
          <View className='gap-2'>
            <Text className='text-xl font-bold'>Vælg længde på historie⌛</Text>
            
          </View>
          <TouchableOpacity className='bg-accent rounded-full px-4 py-2 flex items-center w-48 self-center'>
            <Text className='text-white text-xl font-bold'>Skab din historie</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}