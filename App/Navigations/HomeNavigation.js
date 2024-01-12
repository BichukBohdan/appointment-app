import React from 'react'
import {View, Text} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../Screens/Home";
import Doctors from "../Screens/Doctors";
import HospitalDetails from "../Screens/HospitalDetails";
import BookAppointment from "../Screens/BookAppointment";


const Stack = createStackNavigator()
export default function HomeNavigation() {
  return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='doctors' component={Doctors} />
        <Stack.Screen name='hospital-details' component={HospitalDetails} />
        <Stack.Screen name='book-appointment' component={BookAppointment} />
      </Stack.Navigator>
  )
}
