import React from "react";
import { View, Text, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animated from 'react-native-animatable'

export default function App(){
  return (
    <KeyboardAvoidingView style={estilo.container}>
      <View style={estilo.intro}>
        <Image source={require("./src/img/cook.png")} style={estilo.logo}></Image>
        <Text style={estilo.titulo}>Faça login para acessar suas receitas favoritas!</Text>
      </View>

    <Animated.View 
    
    
    style={[estilo.info, {
      transform: [
        { translate}
      ]
    }]

    }>
      <TextInput placeholder="E-mail" style={estilo.input} 
                 autoCorrect={false}  onChangeText={() =>{}}
                 placeholderTextColor={'#ffffff'}></TextInput>

      <TextInput placeholder="Senha"  style={estilo.input}
                 autoCorrect={false}  onChangeText={() =>{}}
                 placeholderTextColor={'#ffffff'}></TextInput>
    </Animated.View>

    <TouchableOpacity style={estilo.entrar}>
      <Text>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={estilo.criar}>
      <Text>Ainda não é cadastrado? Crie sua conta!</Text>
    </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

const estilo = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#f4d3b3',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  intro: {
    alignItems: 'center',
    margin: 10,
  },
  
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  
  titulo: {
    textAlign: 'center',
    fontSize: 18
  },

  input: {
    backgroundColor: '#0c6667',
    color: '#ffffff',
    padding: 8,
    margin: 10,
    borderRadius: 5,
    width: 260
  },
  
  entrar: {
    backgroundColor: '#f27261',
    padding: 8,
    margin: 10,
    borderRadius: 5,
    
  }
})