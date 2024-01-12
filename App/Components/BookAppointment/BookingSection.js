import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "../Home/SubHeading";
import moment from "moment";
import {useUser} from "@clerk/clerk-expo";
import GlobalApi from "../../Services/GlobalApi";

export default function BookingSection({hospital}) {
  const {user} = useUser()
  const [next7Days, setNext7Days] = useState([])
  const [timeList, setTimeList] = useState([])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState()
  const [note, setNote] = useState('')

  useEffect(() => {
    getDays()
    getTime()
  }, [])
  const getDays = () => {
    const today = moment()
    const nextSevenDays = []

    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, 'days')
      nextSevenDays.push({
        date: date,
        day: date.format('ddd'), // Tue Mon
        formattedDate: date.format('Do MMM') //4th Oct
      })
    }

    setNext7Days(nextSevenDays)
  }

  const getTime = () => {
    const timeList = []

    for (let i = 8; i < 12; i++) {
      timeList.push({
        time: i + ':00 AM',
      })
      timeList.push({
        time: i + ':30 AM',
      })
    }
    for (let i = 1; i < 6; i++) {
      timeList.push({
        time: i + ':00 PM',
      })
      timeList.push({
        time: i + ':30 PM',
      })
    }

    setTimeList(timeList)
  }

  const bookAppointment = () => {
    const data = {
      data: {
        UserName: user.firstName,
        Date: selectedDate,
        Time: selectedTime,
        Email: user.primaryEmailAddress.emailAddress,
        hospital: hospital.id,
        Note: note,
      }
    }

    GlobalApi.createAppointment(data)
        .then(res => console.log(res))
    console.log(data)
  }

  return (
      <View>
        <Text style={styles.title}>Book Appointment</Text>
        <SubHeading headerText={'Day'}/>
        <FlatList
            data={next7Days}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={[
                      styles.dayBtn,
                      selectedDate === item.date
                          ? {backgroundColor: Colors.PRIMARY}
                          : null
                    ]}
                    onPress={() => setSelectedDate(item.date)}
                >
                  <Text
                      style={[
                        {fontFamily: 'Outfit-Regular'},
                        selectedDate === item.date
                            ? {color: Colors.white}
                            : null
                      ]}
                  >{item.day}</Text>
                  <Text
                      style={[
                        {fontFamily: 'Outfit-SemiBold', fontSize: 16},
                        selectedDate === item.date
                            ? {color: Colors.white}
                            : null
                      ]}
                  >{item.formattedDate}</Text>
                </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
        <SubHeading headerText={'Time'}/>
        <FlatList
            data={timeList}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={[
                      styles.dayBtn,
                      {paddingVertical: 16},
                      selectedTime === item.time
                          ? {backgroundColor: Colors.PRIMARY}
                          : null
                    ]}
                    onPress={() => setSelectedTime(item.time)}
                >
                  <Text
                      style={[
                        {fontFamily: 'Outfit-SemiBold', fontSize: 16},
                        selectedTime === item.time
                            ? {color: Colors.white}
                            : null
                      ]}
                  >{item.time}</Text>
                </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
        <SubHeading headerText={'Note'}/>
        <TextInput
            style={styles.note}
            numberOfLines={10}
            placeholder='Write Notes Here'
            onChangeText={value => setNote(value)}
        />
        <TouchableOpacity
            style={styles.confirmBtn}
            onPress={() => bookAppointment()}
        >
          <Text style={styles.confirmBtnText}>
            Make Appointment
          </Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: Colors.GRAY
  },
  dayBtn: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginRight: 10,
    borderColor: Colors.GRAY,
  },
  note: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.SECONDARY,
    borderWidth: 1,
    textAlignVertical: 'top',
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
