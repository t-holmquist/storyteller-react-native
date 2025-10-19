import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ContinueStoryCard from 'components/ContinueStoryCard'
import { StoryCard } from 'components/StoryCard'
import { PREVIOUS_STORIES } from 'data/mockData'
import { GradientButton } from 'components/GradientButton'

export default function Home() {

  return (
    // Only need bottom safearea since navbar already is withing safe area and this view is rendered below
    <SafeAreaView edges={['bottom']}>
      <View className='min-h-full bg-bg-purple py-7 px-4 gap-4'>
        <View className='flex-row gap-3 items-center mb-2'>
          <Text className='text-xl'>Hej igen</Text>
          <Text className='text-3xl font-extrabold text-primary'>Sofie og far🌈</Text>
        </View>
        {/* Continue story section */}
        <View className='gap-2'>
          <Text className='text-xl font-bold'>Fortsæt seneste historie</Text>
          <ContinueStoryCard />
        </View>
        {/* Read again section */}
        <View className='gap-2'>
          <Text className='text-xl font-bold'>Læs en god historie igen</Text>
          <FlatList
            contentContainerClassName='gap-4'
            horizontal={true}
            data={PREVIOUS_STORIES}
            // Returns a ListRenderItem with a property of Item which then contains the objects
            renderItem={({ item }) => (
              <StoryCard title={item.title} image={item.image} />
            )}
          />
        </View>
        <TouchableOpacity className='bg-accent rounded-full px-4 py-2 flex items-center w-48 self-center'>
          <Text className='text-white text-xl font-bold'>Lav ny historie</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}