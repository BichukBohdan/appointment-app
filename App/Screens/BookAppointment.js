import React from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import AppointmentHospitalInfo from "../Components/BookAppointment/AppointmentHospitalInfo";
import ActionButton from "../Components/HospitalDetails/ActionButton";
import Divider from "../Components/Shared/Divider";
import BookingSection from "../Components/BookAppointment/BookingSection";
import Colors from "../../assets/Shared/Colors";

export default function BookAppointment() {
  const params = useRoute().params
  return (
      <ScrollView style={{padding: 20, paddingTop: 40}}>
        <AppointmentHospitalInfo hospital={params.hospital} />
        <ActionButton />
        <Divider extraStyles={{marginTop: 30}} />
        <BookingSection hospital={params.hospital} />
      </ScrollView>
  )
}
