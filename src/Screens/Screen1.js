import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card2 from '../componnt/Card2'
import Card from '../componnt/Card'

const Screen1 = () => {
  // useState

  const ButtonOnPress=()=>{
    console.log("presssed");
  }

  return (
    <View style={styles.st}>

      {/* <Card2/> */}
      <Card 
        name={"mosa"}
        lastName={"issa"}
        image={require("../asets/a.png")}
        />
      {/* <Button title='b' onPress={()=>ButtonOnPress()}/>  */}


    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    st:{
        flex:1,
        backgroundColor:'black',
    },
    textSt:{
        color:'#fff',
        fontSize: 50,
        // fontWeight:'500',
        
        justifyContent:'center',
        alignItems:'center'
    }
})