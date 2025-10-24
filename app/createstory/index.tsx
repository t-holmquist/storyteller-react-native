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
import { PopupOverlay } from 'components/PopupOverlay'

export default function CreateStory() {

  // State from child components to create story
  const [genre, setGenre] = useState('')
  const [analysedImageText, setAnalysedImageText] = useState('')
  // Image from the imagepicker to create story
  const [imageUri, setImageUri] = useState('')
  // The final story
  const [storyTitle, setStoryTitle] = useState('')
  const [storyDescription, setStoryDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // Popupoverlay state
  const [isPopUpVisible, setIsPopUpVisible] = useState(false)


  const handleGenerateStory = async () => {
    setIsLoading(true)

    // Check if we got any data to generate a story or else cancel
    if (!genre && !analysedImageText) {
      console.log('No genre or analyzed image')
      return
    }

    try {
      // Generate story with genre and analyzed image text
      const jsonStory = await generateStoryWithMistral(genre, analysedImageText)

      // Parsing the story JSON and setting the story title and description
      if (jsonStory) {
        // Typescript is confused that the mistral api does indeed return json and not a string.
        const storyAsJsObject = await JSON.parse(jsonStory as any)

        // Sets the title and description from js object
        setStoryTitle(storyAsJsObject.titel)
        setStoryDescription(storyAsJsObject.historie)

        // Show popup if we have generated a story
        setIsPopUpVisible(true)
      }

    } catch (error) {
      console.log('Error generating story' + error)

    } finally {
      setIsLoading(false)
    }

  }


  return (
    <SafeAreaView edges={['bottom']}>
      {/* Popup-komponent */}
      {isPopUpVisible && (
        <PopupOverlay
          onPress={() => setIsPopUpVisible(false)}
          storyTitle={storyTitle}
          storyDescription={storyDescription}
          imageUri={imageUri}
        />
      )}
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
            <StoryImagePicker 
              setImageUri={setImageUri} 
              setAnalysedImageText={setAnalysedImageText} 
              />
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
          {storyTitle && storyDescription && (
            <>
              <Text>{storyTitle}</Text>
              <Text>{storyDescription}</Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}