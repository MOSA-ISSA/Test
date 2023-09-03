import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import ScreenName from './ScreenNames';
import ChatScreen from '../Screens/ChatScreen';

const MainNav = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
      <Stack.Screen 
        name={ScreenName.ChatScreen} 
        component={ChatScreen} 
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})