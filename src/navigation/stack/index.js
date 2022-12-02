import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/home';
import {Info} from '../screens/info';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};
