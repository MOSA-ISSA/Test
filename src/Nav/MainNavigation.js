import { StyleSheet,} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Test from '../Screens/Test';

const MainNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'test'} component={Test}  options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})