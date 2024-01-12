import React, {useEffect, useState} from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GlobalApi, {BASE_URL} from "../../Services/GlobalApi";
import Colors from "../../../assets/Shared/Colors";
import SubHeading from "./SubHeading";
import {useNavigation} from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation()
  const [categoriesList, setCategoriesList] = useState([])

  useEffect(() => {
    return () => {
      getCategories()
    };
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories().then(res => {
      setCategoriesList(res.data.data)
    })
  }

  if (!categoriesList) {
    return null
  }

  return (
      <View style={styles.container}>
        <SubHeading headerText='Doctor Speciality' headerBtnText='See All' />
        <FlatList
            numColumns={4}
            columnWrapperStyle={styles.specialityWrapper}
            data={categoriesList}
            renderItem={({item, index}) => (index < 4) && (
                <TouchableOpacity
                    onPress={() => navigation.navigate(
                        'doctors', {categoryName: item.attributes.Name}
                    )}
                    style={{alignItems: 'center', marginBottom: 10}}
                >
                  <View style={styles.speciality}>
                    <Image
                        source={{uri: BASE_URL + item.attributes.Icon.data.attributes.url}}
                        style={{ width: 30, height: 30 }}
                    />
                  </View>
                  <Text>{item.attributes.Name}</Text>
                </TouchableOpacity>
            )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  specialityWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  speciality: {
    backgroundColor: Colors.SECONDARY,
    padding: 15,
    borderRadius: 99
  }
});
