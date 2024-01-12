import React, {useEffect, useState} from 'react'
import {View, Text, ActivityIndicator} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import PageHeader from "../Components/Shared/PageHeader";
import DoctorTab from "../Components/Doctors/DoctorTab";
import HospitalList from "../Components/Doctors/HospitalList";
import GlobalApi from "../Services/GlobalApi";
import Colors from "../../assets/Shared/Colors";

export default function Doctors() {
  const params = useRoute().params
  const [hospitalsList, setHospitalsList] = useState([])
  const [activeTab, setActiveTab] = useState('Hospital')

  useEffect(() => {
    getHospitalListByCategory()
  }, [params]);

  const getHospitalListByCategory = () => {
    GlobalApi.getHospitalsByCategory(params?.categoryName)
        .then(res => {
          setHospitalsList(res.data.data)
        })
  }

  return (
      <View style={{padding: 20, paddingTop: 40 }}>
        <PageHeader title={params?.categoryName} />
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
