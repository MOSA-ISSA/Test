import {StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import LottieView from 'lottie-react-native'

const HederStAnimation = () => {

    const AnimationHeader = ()=>{
        const [height, setHeight] = useState(30);
        
        const optimizeHeight =()=>{
            if (height<40) {
                return height/2
            }else{return 20}
        }

        return(
            <View style={{
                height:`${height}%`,
                width:'100%',
                backgroundColor:'#4545',
                // alignSelf:'stretch',
                borderWidth:5,
                borderBottomEndRadius:30,
                borderBottomStartRadius:30,
                flexDirection:'row',
                zIndex:0,
                justifyContent:'center',
                alignItems:'center',
                position:'absolute',
                }}>
                    <LottieView
                 speed={0.5}
                 source={require('../asets/animation/gears.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'90%',
                    width:'90%',
                    transform: [{rotate: '130deg'}],
                    marginLeft:optimizeHeight(),
                    // marginLeft:(globalHW.windowHeight/globalHW.windowWidth)+15,
                    padding:0,
                    // position:'absolute',
                    zIndex:0,
                    // bottom:'74%',
                }}
            />
            <LottieView
                 speed={0.1}
                 source={require('../asets/animation/clockBlack.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'100%',
                    width:'100%',
                    transform: [{rotate: '30deg'}],
                    margin:0,
                    padding:0,
                    position:'absolute',
                    zIndex:0,
                    // bottom:'70%',
                    alignSelf:'center'
                }}
            />
                </View>
        )
    }

  return (
    <View style={{flex:1}}>
         <View style={{
            height:'30%',
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
                        <Text style={styles.icon}>sunday</Text>
                    </View>
                    <View style={[styles.box,{width: 50,alignSelf:'center'}]}>

                    </View>
                    <View style={styles.box}>

                    </View>
                </View>
                <View style={styles.sides}><Text style={styles.icon}>⚙</Text></View>
        </View>
            {/*<LottieView
                 speed={0.5}
                 source={require('../asets/animation/gears.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'25%',
                    width:'100%',
                    transform: [{rotate: '130deg'}],
                    marginLeft:7,
                    padding:0,
                    position:'absolute',
                    zIndex:0,
                    bottom:'74%',
                    // backgroundColor:'black'
                    // color:'black'
                }}
            />
            <LottieView
                 speed={0.1}
                 source={require('../asets/animation/clockBlack.json')}
                 autoPlay
                 loop={true}
                 style={{
                    // flex:1,
                    height:'30%',
                    width:'100%',
                    transform: [{rotate: '30deg'}],
                    margin:0,
                    padding:0,
                    position:'absolute',
                    zIndex:0,
                    bottom:'70%',
                }}
            /> */}
        <AnimationHeader/>
    </View>
  )
}

export default HederStAnimation

const styles = StyleSheet.create({
    box:{
        height:'20%',
        backgroundColor: '#4545',
        margin:10,
        borderRadius:10
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
        opacity:1,
    }
})