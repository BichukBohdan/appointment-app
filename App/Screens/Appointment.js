import React, {useEffect, useState} from 'react'
import {View, Text, FlatList} from "react-native";
import PageHeader from "../Components/Shared/PageHeader";
import GlobalApi from "../Services/GlobalApi";
import {useUser} from "@clerk/clerk-expo";
import AppointmentCard from "../Components/Appointment/AppointmentCard";

export default function Appointment() {
  const {user} = useUser()
  const [appointmentsList, setAppointmentsList] = useState([])

  useEffect(() => {
    if (user.firstName) {
      getUserAppointments()
    }
  }, [user])
  const getUserAppointments = () => {
    GlobalApi.getUserAppointments(user.primaryEmailAddress.emailAddress)
        .then(res => {
          setAppointmentsList(res.data.data)
        })
  }

  return (
      <View style={{padding: 20, paddingTop: 40, flex: 1}}>
        <PageHeader title='My Appointments' showBtn={false} />

        <FlatList
            data={appointmentsList}
            renderItem={({item}) => (
                <AppointmentCard appointment={item} />
            )}
            showsVerticalScrollIndicator={false}
        />
      </View>
  )
}
