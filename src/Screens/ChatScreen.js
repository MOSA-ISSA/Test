import { StyleSheet, Text, View, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ChatScreen = (props) => {
    const name =(props.route.params.theName);
    const nav=useNavigation()
    console.log('====================================');
    console.log(nav);
    console.log('====================================');
  return (
    <View>
        <TouchableOpacity onPress={()=>{nav.goBack()}}>
            <Text>{name}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    Text:{
        fontSize: 25,
    }
})