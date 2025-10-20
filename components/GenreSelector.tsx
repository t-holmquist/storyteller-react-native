import { GENRE } from "data/mockData";
import React, { Dispatch, SetStateAction, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";


export const GenreSelector = ({ setGenre }:
  {
    // Setstate action types imported from react
    setGenre: Dispatch<SetStateAction<string>>

  }
) => {

  // Keeps track of selected card
  const [selected, setSelected] = useState(0)

  // Gets the id of the item that the user presses on and sends the genrestate
  const handleSetGenre = (id: number) => {

    // Set id of user pressed card
    setSelected(id)

    // Enter the GENRE array and choose the title from the item
    setGenre(GENRE[id].title)

  }

  return (

    <View>
      <FlatList
        // Makes the flatlist not handling scrolling or else there could be bugs and performance issues
        // Another option is an outer Flatlist with all the different sections as renderitems.
        scrollEnabled={false}
        contentContainerClassName='gap-4'
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        data={GENRE}
        // Returns a ListRenderItem with a property of Item which then contains the objects
        renderItem={({ item }) => (
          <View className="flex-grow">
            <TouchableOpacity
              onPress={() => handleSetGenre(item.id)}
              activeOpacity={0.8}
              className={`${selected === item.id && 'border-accent'} bg-white border-border border rounded-2xl p-8 items-center justify-center relative shadow-md`}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              {/* Runde prik øverst til højre */}
              <View
                className={`${selected === item.id && 'bg-black'} absolute top-2 right-2 w-3 h-3 rounded-full border border-[#070707]`}
              />

              {/* Ikon midt på kortet
              <View className="justify-center items-center mt-2">
                {icon}
              </View> */}

              {/* Genre titel */}
              <Text className="font-bold text-lg text-center">{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

  );
};