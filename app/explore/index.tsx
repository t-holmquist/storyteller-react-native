import { FlatList, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PREVIOUS_STORIES } from 'data/mockData'
import { StoryCard } from 'components/StoryCard'
import { KeyWordInput } from 'components/KeyWordInput'
import { CategorySelector } from 'components/CategorySelector'

export default function Explore() {
   const [genre, setGenre] = useState('')
  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView className='mb-20'>
        <View className='min-h-full bg-bg-green py-7 px-4 gap-4'>
          <View className='gap-3 mb-2'>
            <Text className='text-3xl font-extrabold text-primary'>Find andres historier📚</Text>
            <Text className='text-sm'>Vælg emner til din historie og tryk på skab historie. Jeg er spændt på, hvad du finder på!</Text>
          </View>
          <View className='gap-2'>
            <Text className='text-xl font-bold'>Søg på andres historier</Text>
            {/* Her kan være et komponent */}
            <KeyWordInput
              placeholder='Søg' />
          </View>

             <View className='gap-4'>
            <Text className='text-xl font-bold'>Vælg et tema📚</Text>
            <CategorySelector />
          </View>



          <View className='gap-2'>
            <Text className='text-xl font-bold'>Dette er de historier der søges frem</Text>
            <FlatList
              contentContainerClassName='gap-4'
              horizontal={true}
              data={PREVIOUS_STORIES}
              // Returns a ListRenderItem with a property of Item which then contains the objects
              renderItem={({ item }) => (
                <StoryCard buttonTitle='Læs' title={item.title} image={item.image} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}