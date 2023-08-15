import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Card2 =()=>{
    return(
      <View style={st.CardSt}>
        <Text>Card2</Text>
      </View>
    )
}

export default Card2

const st = StyleSheet.create({
    CardSt:{
      height: 100,
      width: 100,
      backgroundColor: '#fff',
      borderColor:"blue",
      borderWidth:10,
    }
  })
  