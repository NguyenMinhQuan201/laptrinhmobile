import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home/Index';
import DetailScreen from '../Detail/Index';
import NotifyScreen from '../Notify/Notify';
const Stack = createNativeStackNavigator();

export default function TrangChu() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Detail'
          component={DetailScreen} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Notify'
          component={NotifyScreen} options={{headerShown:false}}
        ></Stack.Screen>
      </Stack.Navigator>      
  );
}