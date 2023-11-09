// In App.js in a new project

import React from 'react';
import { View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/Nav/MainNavigation';

const Stack = createNativeStackNavigator();

const App=()=> {
  return (
    // <MainNav/>
    <View style={{flex:1}}>
      <MainNavigation/>
    </View>
  );
}

export default App;