import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function SubHeading({headerText, headerBtnText}) {
  return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
        {headerBtnText && <Text style={styles.headerBtn}>{headerBtnText}</Text>}
      </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Outfit-SemiBold'
  },
  headerBtn: {fontFamily: 'Outfit-Regular', color: Colors.PRIMARY},
})
