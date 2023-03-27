import { useState } from 'react';
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable'

export default function TelaLogin() {
  const [Input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

return (
  <View style={ styles.container}>

    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <Text style={styles.mensagem}> Bem Vindo (a)</Text>
    </Animatable.View>

    <Animatable.View animation="fadeInUp" style={ styles.containerForm}>
      <Text style={styles.title}> E-mail</Text>
      <TextInput placeholder='Digite seu E-mail' style={styles.Input}/>
      
    <View style={styles.inputArea}>   
   <Text style={styles.title}> Senha </Text>
   <TextInput style={styles.Input}
   placeholder='Insira sua senha'
   volue={Input}
   onChangeText={(text) => setInput (text)}
   secureTextEntry={hidePass}/>
   </View>
   
   <TouchableOpacity style={styles.button}>
    <Text style={styles.textbutton}> Acessar</Text>
   </TouchableOpacity>

   <TouchableOpacity style={styles.buttonRegistro}>
   <Text style={styles.textbuttonRegistro}> Não possui uma conta? Cadastre-se</Text>
   </TouchableOpacity>
   </Animatable.View>
   
  </View>
 );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#f3931c"
  },

  containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },

  mensagem: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'#fff',
  },

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title:{
    fontSize: 20,
    marginTop: 28,
  },
  
  Input: {
    borderBottomWidth: 1,
    height:40,
    marginBottom: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor:"#f3931c",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  textbutton:{
     color: "#fff",
     fontSize: 18,
     fontWeight:"bold",
  },

  buttonRegistro:{
    marginTop: 14,
    alignSelf: "center",
  },
  
  textbuttonRegistro: {
    color: "#a1a1a1"
  },


})