import {ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from './src/componnt/Card'


const people =[
  {name:"mosa",lastName:"issa", image:require("./src/asets/Skull.png")},
  {name:"annas",lastName:"sh", image:require("./src/asets/b.jpg")},
  {name:"rakan",lastName:"mn", image:require("./src/asets/a.png")},
]

const RnderCard =()=>{
  return(
      people.map((item,i)=>
        <Card 
        key={i} 
        name={item.name} 
        lastName={item.lastName}
        image={item.image}
        />
      ))
}

const App = () => {
  return (
    <View style={styles.mainContenir}>

      <ScrollView style={styles.mainContenir}>
        <RnderCard/>
      </ScrollView>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContenir:{
    flex:1,// full screan
    // backgroundColor: "black",
    // justifyContent:'center'
  },
})