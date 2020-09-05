import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './telas/HomeScreen';
import CadastroScreen from './telas/CadastroScreen';
import LoginScreen from './telas/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{title:"Tela Inicial"}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} 
        options={{title:"Cadastro de Usuario"}}/>
        <Stack.Screen name="Login" component={LoginScreen} 
        options={{title:"Login do Usuario"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
