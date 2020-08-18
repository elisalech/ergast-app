import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DriversScreen from './DriversScreen';
import DriverScreen from './DriverScreen';
import ResultsScreen from './ResultsScreen';

const Stack = createStackNavigator();

export default function ScreensContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Drivers">
        <Stack.Screen name="Drivers" component={DriversScreen} />
        <Stack.Screen name="Driver" component={DriverScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
