import {Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from './src/componnt/Card'

const people =[
  {name:"mosa",lastName:"issa", image:()=>require("./src/asets/Images/Skull.png")},
  {name:"annas",lastName:"sh", image:()=>require("./src/asets/Images/b.jpg")},
  {name:"rakan",lastName:"mn", image:()=>require("./src/asets/Images/a.png")},
]


const ShowCards =()=>{
  return(
      people.map((item,i)=>
        <Card 
        key={i} 
        name={item.name} 
        lastName={item.lastName}
        image={item.image()}
        />
      ))
}

const TextCard =({item})=>(
  <View style={styles.continer}>
    <Text style={styles.text}>{item}</Text>
  </View>
)

  



const App = () => {

  const [num, setNum] = useState(0);
  const [arr, setArr]=useState([]);
  const [text, setText] = useState("");

  const ShowList=()=>{
    return(
      <FlatList
        data={arr}
        renderItem={({item}) => <TextCard item={item}/>}
        // keyExtractor={item => item}
      />
    )
  }


  const Add =(text)=>{
    setText(text)
    setNum(num+1)  
    console.log(num);
  }

  const AddName =()=>{
    // setArr("mosa") 
    arr.push("mosa")
    setArr([...arr]) 
    // console.log(num);
  }

  return (
    <View style={styles.mainContenir}>
      <ScrollView>
        <ShowCards/>
      </ScrollView>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  mainContenir:{
    flex:1,// full screan
    backgroundColor: "black",
    // justifyContent:'center'
  },
  text:{
    color:'#fff',
    fontSize:20,
  },
  continer:{
    height:35,
    width:"100%",
    backgroundColor: "green",
    margin:3,
  },
  input:{
    backgroundColor: "#ffff",
  }
  
})