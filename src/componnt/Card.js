import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) =>{
    const {name , lastName, image} = props
    // const image="https://th.bing.com/th/id/R.c438b672c1005b1bbde4812468d74551?rik=HaTgQ9X0lAGQAg&riu=http%3a%2f%2fwww.appcoda.com%2fwp-content%2fuploads%2f2015%2f04%2freact-native-1024x631.png&ehk=0ecJ65prN%2f%2f8U9U7WSnPqMPJ%2fuPo5iFbyIT9hV0J3YE%3d&risl=&pid=ImgRaw&r=0"
    return(
      <View style={styles.card}>

        <View style={styles.TopContiner}>
          <Image 
            style={styles.Img}  
            source={image} 
          />
          <View style={styles.TextContiner}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>{lastName}</Text>
          </View>
        </View>

      <View style={styles.BottomContiner}>
          <Text style={styles.textStyle}>ID</Text>
      </View>


      </View>
    )
  }

  {/* <View style={styles.TopContiner}>
  
          <View style={styles.imgCard}>
            {image?<Image style={styles.Img}  source={image} />:null}
          </View>
  
          <View style={styles.TextContiner}>
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>{lastName}</Text>
          </View>
  
        </View>
  
        <View style={styles.BottomContiner}>
          <Text style={styles.textStyle}>ID</Text>
        </View> */}
  

export default Card

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 40,
        color:'black',
        fontWeight:'900',
        // alignSelf:'flex-end',
      },
      card:{
        backgroundColor:'red',
        height:400,
        width:400,
        alignSelf:'center',
        borderRadius:20,
        borderWidth:10,
        borderColor:'#0a6db9',
        padding:10,
        margin:10,
        flexDirection:'column',
        alignItems:'center'
        // justifyContent:'flex-end',
      },
      imgCard:{
        backgroundColor:'black',
        alignSelf:'flex-start',
        height:'100%',
        width:'40%',
        marginRight:10
      },
      TopContiner:{
        height:'50%',
        width:'100%',
        flexDirection:'row',
        // backgroundColor:'red'
      },
      TextContiner:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        // width:'60%',
        flexGrow:1,
        flexDirection:'column',
      },
      BottomContiner:{
        flexGrow:1,
        // width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#fff",
      },
      Img:{
        height:'100%',
        width:'50%',
      }
})