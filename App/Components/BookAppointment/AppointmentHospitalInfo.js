import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import PageHeader from "../Shared/PageHeader";
import {BASE_URL} from "../../Services/GlobalApi";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../../../assets/Shared/Colors";
import Divider from "../Shared/Divider";

export default function AppointmentHospitalInfo({hospital}) {
  return (
      <View>
        <PageHeader title='Book Appointment'/>
        <View style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: 15,
          alignItems: 'center',
          marginBottom: 15,
        }}>
          <Image
              source={{uri: BASE_URL + hospital.attributes.image.data.attributes.url}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 99,
              }}
          />
          <View style={{width: '70%'}}>
            <Text style={styles.name}>{hospital.attributes.Name}</Text>
            <View style={styles.additional}>
              <Ionicons name="location" size={22} color={Colors.PRIMARY}/>
              <Text style={{
                fontSize: 14,
                fontFamily: 'Outfit-Regular',
                color: Colors.GRAY,
              }}>{hospital.attributes.Address}</Text>
            </View>
          </View>
        </View>

        <Divider />

      </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
    marginBottom: 8,
  },
  additional: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 4
  }
})
