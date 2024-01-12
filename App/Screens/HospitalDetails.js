import React, {useEffect, useState} from 'react'
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PageHeader from "../Components/Shared/PageHeader";
import {useNavigation, useRoute} from "@react-navigation/native";
import {BASE_URL} from "../Services/GlobalApi";
import HospitalInfo from "../Components/HospitalDetails/HospitalInfo";
import Colors from "../../assets/Shared/Colors";

export default function HospitalDetails() {
  const [hospital, setHospital] = useState()
  const params = useRoute().params
  const navigation = useNavigation()

  useEffect(() => {
    setHospital(params.hospital)
  }, [])
  return hospital && (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <ScrollView>
          <View style={{ position: 'absolute', zIndex: 10, margin: 15 }}>
            <PageHeader title=''/>
          </View>
          <View>
            <Image
                source={{uri: BASE_URL + hospital.attributes.image.data.attributes.url}}
                style={{width: '100%', height: 300}}
            />

            <View style={styles.hospitalInfo}>
              <HospitalInfo hospital={hospital} />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
            style={styles.confirmBtn}
            onPress={() => navigation.navigate('book-appointment', {hospital})}
        >
          <Text style={styles.confirmBtnText}>
            Book Appointment
          </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  hospitalInfo: {
    marginTop: -20,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  confirmBtn: {
    backgroundColor: Colors.PRIMARY,
    padding: 13,
    margin: 10,
    borderRadius: 99,

    left: 0,
    right: 0,
    marginBottom: 10,
    zIndex: 20,
  },
  confirmBtnText: {
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Outfit-SemiBold',
    fontSize: 17,
  },
})
