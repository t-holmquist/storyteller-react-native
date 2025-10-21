import { GENRE } from "data/mockData";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";


export const CategorySelector = () => {

  // Keeps track of selected card
  const [selected, setSelected] = useState(0)

  // Gets the id of the item that the user presses on and sends the genrestate
  const handleSetGenre = (id: number) => {

    // Set id of user pressed card
    setSelected(id)

  }

  return (

    <View>
      <FlatList
        // Makes the flatlist not handling scrolling or else there could be bugs and performance issues
        // Another option is an outer Flatlist with all the different sections as renderitems.
        horizontal={true}
        contentContainerClassName='gap-4'
      
        
        data={GENRE}
        // Returns a ListRenderItem with a property of Item which then contains the objects
        renderItem={({ item }) => (
          <View className="flex-grow">
            <TouchableOpacity
              onPress={() => handleSetGenre(item.id)}
              activeOpacity={1}
              className={`${selected === item.id ? 'border-accent' : 'border-border'} bg-white border rounded-2xl p-4 items-center justify-center relative shadow-md`}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >

              {/* Ikon midt på kortet
              <View className="justify-center items-center mt-2">
                {icon}
              </View> */}

              {/* Genre titel */}
              <Text className="text-lg text-center">{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  );
};