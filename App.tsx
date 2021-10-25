import React from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import { AppProvider } from './src/contexts/app';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#034C8C'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontFamily: 'Poppins_500Medium'
            },
          }}
          >
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </AppProvider>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}