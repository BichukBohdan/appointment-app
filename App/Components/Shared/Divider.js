import React from 'react'
import {StyleSheet, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function Divider({extraStyles = {}}) {
  return (
      <View style={{...styles.divider, ...extraStyles}} />
  )
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHT_GRAY,
    margin: 5,
    marginBottom: 15
  },
})
