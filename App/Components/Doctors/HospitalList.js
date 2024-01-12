import React from 'react'
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import HospitalCard from "../Shared/HospitalCard";
import {useNavigation} from "@react-navigation/native";

export default function HospitalList({list}) {
  const navigation = useNavigation()
  return (
      <View>
        <FlatList
            data={list}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={
                      () => navigation.navigate('hospital-details', {hospital: item})
                    }
                >
                  <HospitalCard hospital={item}/>
                </TouchableOpacity>
            )}
        />
      </View>
  )
}
