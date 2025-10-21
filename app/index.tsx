import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ContinueStoryCard from 'components/ContinueStoryCard'
import { StoryCard } from 'components/StoryCard'
import { PREVIOUS_STORIES } from 'data/mockData'
import { PrimaryButton} from 'components/PrimaryButton'

export default function Home() {

  return (
    // Only need bottom safearea since navbar already is withing safe area and this view is rendered below
    <SafeAreaView edges={['bottom']}>
      <ScrollView className='mb-20'>
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
                <StoryCard buttonTitle='Læs igen' title={item.title} image={item.image} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <PrimaryButton
            text="Lav en historie"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}