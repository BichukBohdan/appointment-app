import React from 'react'
import {Image, Text, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import Divider from "../Shared/Divider";
import {Ionicons} from "@expo/vector-icons";
import moment from "moment";

export default function AppointmentCard({appointment}) {
  return (
      <View style={{
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: Colors.white
      }}>
        <Text style={{fontSize: 18, fontFamily: 'Outfit-SemiBold', marginVertical: 10}}>
          {moment(appointment.attributes.Date).format('MMMM Do YYYY')} - {appointment.attributes.Time}
        </Text>
        <Divider />
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center'
        }}>
          <Image
              source={{uri: 'https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg'}}
              style={{height: 90, width: 90, borderRadius: 10}}
          />
          <View>
            <Text style={{fontSize: 16, fontFamily: 'Outfit-SemiBold'}}>
              {appointment.attributes.hospital.data.attributes.Name}
            </Text>
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5, marginTop: 4}}>
              <Ionicons name="location" size={18} color={Colors.PRIMARY}/>
              <Text style={{fontFamily: 'Outfit-Regular', color: Colors.GRAY}}>{appointment.attributes.hospital.data.attributes.Address}</Text>
            </View>
            <View style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5, marginTop: 4}}>
              <Ionicons name="location" size={18} color={Colors.PRIMARY}/>
              <Text style={{fontFamily: 'Outfit-Regular', color: Colors.GRAY}}>Booking Id: #{appointment.id}</Text>
            </View>
          </View>
        </View>
      </View>
  )
}
