import React from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import {Ionicons} from "@expo/vector-icons";
import ActionButton from "./ActionButton";
import SubHeading from "../Home/SubHeading";
import Divider from "../Shared/Divider";

export default function HospitalInfo({hospital}) {
  const descriptions = hospital?.attributes?.Description?.map(
      (item, index) => (<Text key={index}>{item.children[0].text}</Text>)
  )

  return hospital && (
      <View>
        <Text style={styles.name}>{hospital.attributes.Name}</Text>
        <FlatList
            data={hospital.attributes.categories.data}
            renderItem={({item}) => (
                <Text style={styles.categoryName}>{item.attributes.Name},</Text>
            )}
            horizontal
        />

        <Divider />

        <View style={styles.additional}>
          <Ionicons name="location" size={22} color={Colors.PRIMARY}/>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Outfit-Regular',
            color: Colors.GRAY,
          }}>{hospital.attributes.Address}</Text>
        </View>
        <View style={{...styles.additional, marginBottom: 15}}>
          <Ionicons name="time" size={22} color={Colors.PRIMARY}/>
          <Text style={{
            fontSize: 18,
            fontFamily: 'Outfit-Regular',
            color: Colors.GRAY,
          }}>Mon Sun | 11AM - 8PM</Text>
        </View>
        <ActionButton />

        <Divider />

        <SubHeading headerText='About' headerBtnText='See all' />
        {descriptions}
      </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontFamily: 'Outfit-SemiBold'
  },
  categoryName: {marginRight: 10, color: Colors.GRAY},
  additional: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 4
  }
})
