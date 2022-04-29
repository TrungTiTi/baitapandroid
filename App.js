/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logup from './src/Logup'
import Login from './src/Login';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Logup">
        <Stack.Screen name="Logup" component={Logup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
