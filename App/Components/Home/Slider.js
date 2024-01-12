import React, {useEffect, useState} from 'react'
import {Dimensions, FlatList, View, Image} from "react-native";
import GlobalApi, {BASE_URL} from "../../Services/GlobalApi";


export default function Slider() {
  const [sliderList, setSliderList] = useState([])
  // const sliderList = [
  //   {
  //     id: 1,
  //     name: 'Slider 1',
  //     imageUrl: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/07/Banner-1.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Slider 2',
  //     imageUrl: 'https://img.freepik.com/premium-vector/medical-healthcare-online-consultation-banner_42775-520.jpg'
  //   }
  // ]

  useEffect(() => {
    return () => {
      getSlider()
    };
  }, []);


  const getSlider = () => {
    GlobalApi.getSlider()
        .then(res => {
          setSliderList(res.data.data)
        })
  }

  return (
      <View style={{marginTop: 10}}>
        <FlatList
            data={sliderList}
            renderItem={({item}) => (
                <Image
                    source={{uri: BASE_URL + item.attributes.Image.data.attributes.url}}
                    style={{
                      width: Dimensions.get('screen').width * 0.9,
                      height: 170,
                      borderRadius: 10,
                      margin: 2
                }}
                />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
        />
      </View>
  )
}
