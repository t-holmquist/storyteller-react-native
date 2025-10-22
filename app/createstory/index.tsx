import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GenreSelector } from 'components/GenreSelector'
import { StoryLengthSelector } from 'components/StoryLengthSelector'
import { KeyWordInput } from 'components/KeyWordInput'
import { VoiceSelector } from 'components/VoiceSelector'
import { PrimaryButton } from 'components/PrimaryButton'
import StoryImagePicker from 'components/StoryImagePicker'
import { generateStoryWithMistral } from 'data/mistralApi'

export default function CreateStory() {

  const [genre, setGenre] = useState('')
  const [analyzedImageText, setAnalyzedImageText] = useState('')
  // The final story
  const [story, setStory] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const handleGenerateStory = async () => {
    setIsLoading(true)

    // Check if we got any data to generate a story or else cancel
    if (!genre && !analyzedImageText) {
      console.log('No genre or analyzed image')
      return
    }

    try {
      // Generate story with genre and analyzed image text
      const story = await generateStoryWithMistral(genre, analyzedImageText)

      // Sets the story so that it can be rendered dynamically
      setStory(story as string)

    } catch (error) {
      console.log('Error generating story' + error)

    } finally {
      setIsLoading(false)
    }

  }


  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView className='mb-20'>
        <View className='min-h-full bg-bg-sand py-6 px-4 gap-6'>
          <View className='gap-3 mb-2'>
            <Text className='text-3xl font-extrabold text-primary'>Lad os være kreative🌟</Text>
            <View className='border border-border p-2 rounded-xl bg-bg-purple'>
              <Text className='text-sm'>Vælg emner til din historie og tryk på skab historie. Jeg er spændt på, hvad du finder på!</Text>
            </View>
          </View>
          {/* Image picker section */}
          <View className='gap-4'>
            <Text className='text-xl font-semibold'>Tag et billede af dit legetøj🧸</Text>
            <StoryImagePicker setAnalyzedImageText={setAnalyzedImageText} />
          </View>
          {/* Genre selection. Gets the setter state function */}
          <View className='gap-4'>
            <Text className='text-xl font-semibold'>Vælg et tema📚</Text>
            <GenreSelector setGenre={setGenre} />
          </View>
          {/* Keyword input */}
          <View className='gap-4'>
            <Text className='text-xl font-semibold'>Skriv ord til din historie💬</Text>
            <KeyWordInput placeholder='Fx - drager, venner, rumskib, katte' />
          </View>
          {/* Storylengthselector */}
          <View className='gap-4'>
            <Text className='text-xl font-semibold'>Vælg længde på historie⌛</Text>
            <StoryLengthSelector />
          </View>
          {/* Voice selector */}
          <View className='gap-4'>
            <Text className='text-xl font-semibold'>Vælg stemmen til oplæsning🎤</Text>
            <VoiceSelector />
          </View>
          {/* Generate story button */}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <PrimaryButton
                onPress={handleGenerateStory}
                text='Lav din historie' />
            </>
          )}
          {story && (
            <Text>{story}</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}