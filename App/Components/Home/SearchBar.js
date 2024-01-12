import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";

export default function SearchBar({setSearchText}) {
  const [searchInput, setSearchInput] = useState('')

  return (
      <View style={{ marginTop: 15 }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          borderWidth: 0.7,
          borderColor: Colors.GRAY,
          padding: 10,
          borderRadius: 8,
        }}>
          <Ionicons name="search-outline" size={24} color={Colors.PRIMARY} />
          <TextInput
              placeholder="Search"
              value={searchInput}
              onChangeText={value => setSearchInput(value)}
              onSubmitEditing={() => setSearchText(searchInput)}
              style={{width: '100%', fontFamily: 'Outfit-Regular'}}
          />
        </View>
      </View>
  )
}
