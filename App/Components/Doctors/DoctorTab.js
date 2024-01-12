import React, {useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";

export default function DoctorTab({ activeTab }) {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
      <View style={{
        marginTop: 10
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <TouchableOpacity
              style={[activeIndex === 0 ? styles.activeTab : styles.inactiveTab]}
              onPress={() => {
                setActiveIndex(0)
                activeTab('Hospital')
              }}
          >
            <Text style={[
                activeIndex === 0 ? styles.activeText : styles.inactiveText
            ]}>Hospital</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[activeIndex === 1 ? styles.activeTab : styles.inactiveTab]}
              onPress={() => {
                setActiveIndex(1)
                activeTab('Doctor')
              }}
          >
            <Text style={[
              activeIndex === 1 ? styles.activeText : styles.inactiveText
            ]}>Doctors</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  activeText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: Colors.PRIMARY
  },
  inactiveText: {
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: Colors.GRAY
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.PRIMARY,
    padding: 3,
  },
  inactiveTab: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
    padding: 3,
   },
})
