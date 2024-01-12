import React from 'react'
import {View, Text, Image, StyleSheet} from "react-native";
import {BASE_URL} from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";

export default function HospitalItem({hospital}) {
  return (
      <View style={styles.container}>
        <Image
            source={{uri: BASE_URL + hospital.attributes.image.data.attributes.url}}
            style={styles.image}
        />
        <View style={{padding: 7}}>
          <Text style={styles.name}>{hospital.attributes.Name}</Text>
          <Text style={styles.address}>{hospital.attributes.Address}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    marginRight: 10
  },
  image: {width: '100%', height: 110, borderTopLeftRadius: 10, borderTopRightRadius: 10},
  name: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 16
  },
  address: {
    color: Colors.GRAY
  }
})
