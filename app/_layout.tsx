import { Image, Text, View } from 'react-native';
import '../global.css';

import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from 'components/Header';


export default function RootLayout() {


  // Component that dynamically sets tabbaricons for the different screens
  const TabBarIcon = ({ focused, icon, title }: any) => (
    <View className='flex items-center justify-center min-h-full gap-1 mt-12 min-w-24'>
      <Image source={icon} width={25} height={25} tintColor={focused ? 'purple' : 'black'} />
      <Text className={focused ? 'text-sm font-bold text-primary' : 'text-sm font-bold text-black'}>{title}</Text>
      {focused && (
        <View className='w-8 h-1 rounded-t-full bg-primary'></View>
      )}
    </View>
  )

  // Returning the tabs component so that all routes
  // on same level as layoutfile have tabs shown always
  return (
    // Global tab settings.
    <>
    {/* Safe area view only needs to be at the top since the header is at the top. Otherwise it would create whitespace below for the other screens */}
      <SafeAreaView className='bg-white' edges={['top']}>
        <Header />
      </SafeAreaView>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          // Styles the whole tabbar border radius, position etc.
          tabBarStyle: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            marginHorizontal: 20,
            height: 80,
            position: 'absolute',
            bottom: 25,
            backgroundColor: 'white',
            shadowColor: '#1a1a1a',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
          }
        }}
      >
        {/* Single tab screen and settings */}
        <Tabs.Screen
          // Name of the actual route based on file-system
          name='index'
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon title="Hjem" icon={require('../assets/icons/house.png')} focused={focused} />
          }}
        />
        <Tabs.Screen
          name='createstory/index'
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon title="Lav historie" icon={require('../assets/icons/circle-plus.png')} focused={focused} />
          }}
        />
        <Tabs.Screen
          name='explore/index'
          options={{
            tabBarIcon: ({ focused }) => <TabBarIcon title="Udforsk" icon={require('../assets/icons/search.png')} focused={focused} />
          }}
        />
      </Tabs>
    </>
  );
}
