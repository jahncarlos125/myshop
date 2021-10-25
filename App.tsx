import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import { AppProvider } from './src/contexts/app';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#37F092'
            },
            headerTintColor: '#0E1D47',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          >
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}