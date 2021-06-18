import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './src/components/Header';

import Catalogo from './src/pages/Catalogo';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#313746'},
        }}
        initialRouteName="Catalogo"
      >
        <Stack.Screen
          name="Catalogo"
          component={Catalogo}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}