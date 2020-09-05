import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { View, Image, Button} from 'react-native';

export default class Cadastro extends React.Component{

    render() {
        return (
          <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>
              <Text>Cadastro Screen</Text>
              <Button title="Ir para Login" onPress={
                  () => this.props.navigation.navigate('Login')
              }></Button>
          </View>
        );
      }
} 
