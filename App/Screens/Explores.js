import React, {useEffect, useState} from 'react'
import {ActivityIndicator, Text, View} from "react-native";
import DoctorTab from "../Components/Doctors/DoctorTab";
import {useRoute} from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import HospitalList from "../Components/Doctors/HospitalList";
import GlobalApi from "../Services/GlobalApi";

export default function Explores() {
  const params = useRoute().params
  const [hospitalsList, setHospitalsList] = useState([])
  const [activeTab, setActiveTab] = useState('Hospital')

  useEffect(() => {
    getHospitalListByCategory()
  }, [params]);

  const getHospitalListByCategory = () => {
    GlobalApi.getAllHospitals()
        .then(res => {
          setHospitalsList(res.data.data)
        })
  }

  return (
      <View style={{padding: 20, paddingTop: 40}}>
        <Text style={{fontSize: 26, fontFamily: 'Outfit-SemiBold'}}>Explore</Text>

        <DoctorTab activeTab={value => setActiveTab(value)} />

        {!hospitalsList?.length
            ? (
                <ActivityIndicator size='large' color={Colors.PRIMARY} style={{marginTop: '50%'}} />
            )
            : activeTab === 'Hospital'
                ? (
                    <HospitalList list={hospitalsList} />
                )
                : <Text>Doctor list</Text>
        }
      </View>
  )
}
