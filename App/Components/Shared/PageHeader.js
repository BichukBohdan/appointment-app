import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";


export default function PageHeader({ title, showBtn = true }) {
  const navigation = useNavigation()

  return (
      <View style={styles.container}>
        {showBtn && <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={24} color="black"/>
        </TouchableOpacity>}
        <Text style={{
          fontSize: 25,
          fontFamily: 'Outfit-SemiBold'
        }}>{title}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  }
})
