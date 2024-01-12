import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SubHeading from "./SubHeading";
import GlobalApi from "../../Services/GlobalApi";
import HospitalItem from "./HospitalItem";
import {useNavigation} from "@react-navigation/native";

export default function PremiumHospitals() {
  const navigation = useNavigation()
  const [hospitals, setHospitals] = useState([])

  useEffect(() => {
    return () => {
      getPremiumHospitals()
    };
  }, []);
  const getPremiumHospitals = () => {
    GlobalApi.getPremiumHospitals()
        .then(res => {
          setHospitals(res.data.data)
        })
  }

  return hospitals && (
      <View style={styles.container}>
        <SubHeading headerText='Our Premium Hospitals' headerBtnText='See All' />
        <FlatList
            data={hospitals}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('hospital-details', {hospital: item})}
                >
                  <HospitalItem hospital={item} />
                </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  }
})
