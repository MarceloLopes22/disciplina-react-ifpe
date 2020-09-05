import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { View, Image, Button} from 'react-native';

export default class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      nome: "Marcelo",
      profissao: "Analista Desenvolvedor"
    }
    //1
    console.log('Construtor');
  }
//2
  componentWillMount(){
    console.log('Antes da renderização');
  }
//4
  componentDidMount(){
    console.log('Depois da renderização');
  }

  atualizar(){
    this.state = {
      nome: "Lopes"
    }
  }

    render() {
      //3
      console.log('Renderização');
        return (
          <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>
              <Text>Home Screen</Text>
        <Text>{this.state.nome}</Text>
              <Button title="Ir para Cadastro" onPress={
                  () => this.props.navigation.navigate('Cadastro')
              }></Button>
              <Button title="this.state.nome" onPress={
                  () => this.atualizar()
              }></Button>
          </View>
        );
      }
} 
