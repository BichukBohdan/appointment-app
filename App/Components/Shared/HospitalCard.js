import React from 'react'
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {BASE_URL} from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";
import {Ionicons} from '@expo/vector-icons';
import Divider from "./Divider";


export default function HospitalCard({hospital}) {
  return (
      <View style={styles.container}>
        <Image
            source={{uri: BASE_URL + hospital.attributes.image.data.attributes.url}}
            style={styles.image}
        />
        <View style={{
          padding: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: Colors.LIGHT_GRAY
        }}>
          <Text style={styles.name}>{hospital.attributes.Name}</Text>
          <FlatList
              data={hospital.attributes.categories.data}
              renderItem={({item}) => (
                  <Text style={styles.categoryName}>{item.attributes.Name},</Text>
              )}
              horizontal
          />

          <Divider />

          <View style={styles.additional}>
            <Ionicons name="location" size={18} color={Colors.PRIMARY}/>
            <Text>{hospital.attributes.Address}</Text>
          </View>
          <View style={styles.additional}>
            <Ionicons name="eye-sharp" size={18} color={Colors.PRIMARY}/>
            <Text>658 Views</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {marginBottom: 20, borderWidth: 1, borderColor: Colors.LIGHT_GRAY, borderRadius: 10},
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  name: {fontFamily: 'Outfit-SemiBold', fontSize: 18},
  categoryName: {marginRight: 10, color: Colors.GRAY},
  additional: {display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 5, marginTop: 4}
})
