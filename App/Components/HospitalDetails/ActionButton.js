import React from 'react'
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import {Ionicons} from "@expo/vector-icons";

export default function ActionButton() {

  const actionButtonList = [
    {
      id: 1,
      name: 'Website',
      icon: 'earth'
    },
    {
      id: 2,
      name: 'Email',
      icon: 'chatbubble-ellipses'
    },
    {
      id: 3,
      name: 'Phone',
      icon: 'md-call'
    },
    {
      id: 4,
      name: 'Direction',
      icon: 'map'
    },
    {
      id: 5,
      name: 'Share',
      icon: 'share'
    },

  ]

  return (
      <View style={{marginTop: 15}}>
        <FlatList
            data={actionButtonList}
            renderItem={({item}) => (
                <TouchableOpacity style={{alignItems: 'center'}}>
                  <View style={styles.item}>
                    <Ionicons
                        name={item.icon}
                        size={25}
                        color={Colors.PRIMARY}
                    />
                  </View>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
            )}
            numColumns={5}
            columnWrapperStyle={{
              flex: 1,
              justifyContent: 'space-between'
            }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.SECONDARY,
    padding: 13,
    borderRadius: 99,
    alignItems: 'center',
    width: 55
  },
  itemText: {
    fontFamily: 'Outfit-SemiBold',
    marginTop: 5,
  }
})
