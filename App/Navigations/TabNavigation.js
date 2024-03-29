import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Appointment from "../Screens/Appointment";
import Profile from "../Screens/Profile";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HomeNavigation from "./HomeNavigation";
import Explores from "../Screens/Explores";


const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeNavigation} options={{
          tabBarIcon: ({color, size}) => (
              <Ionicons name="ios-home" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Explore" component={Explores} options={{
          tabBarIcon: ({color, size}) => (
              <Ionicons name="search" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Appointment" component={Appointment} options={{
          tabBarIcon: ({color, size}) => (
              <Ionicons name="calendar" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({color, size}) => (
              <FontAwesome name="user-circle" size={size} color={color} />
          )
        }} />
      </Tab.Navigator>
  )
}
