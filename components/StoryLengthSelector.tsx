import { STORYLENGTH } from "data/mockData";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";


export const StoryLengthSelector = () => {

    // Keeps track of selected card
    const [selected, setSelected] = useState(0)

    return (

        <FlatList
            horizontal={true}
            contentContainerClassName='gap-4'
            data={STORYLENGTH}
            // Returns a ListRenderItem with a property of Item which then contains the objects
            renderItem={({ item }) => (
                <View>
                    <TouchableOpacity
                        onPress={() => setSelected(item.id)}
                        activeOpacity={1}
                        className={`${selected === item.id ? 'border-accent' : 'border-border'} bg-white border py-2 px-4 rounded-xl items-center justify-center`}
                    >

                        {/* Genre titel */}
                        <Text className="text-lg text-center">{item.length}</Text>
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />

    );
};