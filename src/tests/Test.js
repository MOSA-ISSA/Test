import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Test = () => {
// const MyIcon = ;

  return (
    <View>
      <Text>Test</Text>
      <Icon name="rocket" size={30} color="#900" />
      {/* <MyIcon/> */}
      {/* <Icon name="rocket" size={30} color="#900" /> */}
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})