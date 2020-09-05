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

  //5
  shouldComponentUpdate(){
    console.log('Update State');
    return true;
  }

  atualizar(){
    this.setState({
      nome: "Lopes"
    });
  }

    render() {
      //3
      console.log('Renderização');
        return (
          <View style={{flex: 3, alignItems: "center", justifyContent: "center"}}>
              <Text>{this.state.nome}</Text>
              <Button title="Ir para Cadastro" onPress={() => this.atualizar()}/>
          </View>
        );
      }
} 
