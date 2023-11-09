import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const Test = () => {
  return (
    <View style={{flex:1}}>
        <View style={{
            height:'30%',
            backgroundColor:'#4545',
            alignSelf:'stretch',
            borderWidth:5,
            borderBottomEndRadius:30,
            borderBottomStartRadius:30,
            flexDirection:'row',
            zIndex:1,
            }}>
                <View style={styles.sides}><Text style={styles.icon}>☰</Text></View>
                <View style={{flex:1,alignSelf:'stretch'}}>
                    <View style={styles.box}>

                    </View>
                    <View style={styles.box}>

                    </View>
                    <View style={styles.box}>

                    </View>
                </View>
                <View style={styles.sides}><Text style={styles.icon}>⚙</Text></View>
        </View>
            <LottieView
                 speed={0.5}
                 source={require('../asets/animation/gears.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'35%',
                    width:'100%',
                    transform: [{rotate: '130deg'}],
                    margin:0,
                    padding:0,
                    position:'absolute',
                    zIndex:0,
                    bottom:'65%',
                }}
            />
            {/* <LottieView
                 speed={0.5}
                 source={require('../asets/animation/gears2.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'50%',
                    width:'100%',
                    transform: [{rotate: '30deg'}],
                    margin:0,
                    padding:0,
                    position:'absolute',
                    zIndex:0,
                    bottom:'60%',
                }}
            /> */}
        
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    box:{
        height:'20%',
        backgroundColor: '#fff',
        margin:10,
        borderRadius:20
    },
    sides:{
        // flex:1,
        width: '10%',
        alignSelf:'auto',
        backgroundColor: '#4545',
        margin:20,
        justifyContent:'flex-end'
    },
    icon:{
        fontSize:25,
        alignSelf:'center',
        color:'black',
        fontWeight:'bold',
    }
})