import { StyleSheet, Text, View,Image,Alert,TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenName from '../Nav/ScreenNames'
import { useNavigation } from '@react-navigation/native'

const WhatsCard = ({name,image}) => {

  const a = useNavigation()

  return (
    <TouchableOpacity  style={styles.box}
    onPress={() => 
      a.navigate(ScreenName.ChatScreen,{theName:name})
      // Alert.alert('Simple Button pressed')
    }
    >
     <Image
      source={image}
      style={styles.img}
     />
     <Text style={styles.Text}>{name}</Text>
    </TouchableOpacity >
  )
}

export default WhatsCard

const styles = StyleSheet.create({
  box:{
    height:100,
    width:'100%',
    backgroundColor:'green' ,
    flexDirection:'row'
  },
  img:{
    height: 100,
    width:100,
    backgroundColor:''
  },
  Text:{
    fontSize: 25,
    marginLeft:20,
  }
})