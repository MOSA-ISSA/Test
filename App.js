// In App.js in a new project

import * as React from 'react';
import MainNav from './src/Nav/MainNav';
import { View,StyleSheet,ScrollView,FlatList } from 'react-native';
import Card from './src/componnt/Card';
import WhatsCard from './src/componnt/WhatsCard';
import peopleData from './src/Data/Data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import ChatScreen from './src/Screens/ChatScreen';
import ScreenName from './src/Nav/ScreenNames';

const RenderCard=()=>(
  peopleData.map((item,i)=>
    <WhatsCard key={i} image={item.image()} name={item.name}/>
  )
)

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    <MainNav/>
  );
}

export default App;