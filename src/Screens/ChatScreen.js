import { StyleSheet, Text, View, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const ChatScreen = (props) => {
    const name =(props.route.params.theName);
    const nav=useNavigation()
  return (
    <View style={{flex:1,alignSelf:'stretch',borderWidth:5,}}>
        <LottieView
                 speed={2}
                 source={require('../asets/animation/a.json')}
                 autoPlay
                 loop={true}
                 resizeMode={'contain'}
                 style={{
                    flex:1
                }}
                 //onAnimationLoop={restorData()}
                 //onLayout={restorData}
                 //()=>props.navigation.navigate('x')
            />
        {/* <TouchableOpacity onPress={()=>{nav.goBack()}}>
            <Text>{name}</Text> 
        </TouchableOpacity> */}
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    Text:{
        fontSize: 25,
    }
})