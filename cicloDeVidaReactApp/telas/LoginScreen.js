import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { View, Image, Button} from 'react-native';

export default class Login extends React.Component{

    render() {
        return (
          <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>
              <Text>Login Screen</Text>
              <Button title="Ir para Home" onPress={
                  () => this.props.navigation.navigate('Home')
              }></Button>
          </View>
        );
      }
} 
