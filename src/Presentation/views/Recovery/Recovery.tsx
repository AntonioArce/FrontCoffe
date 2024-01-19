import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';

export const RecoveryScreen = () => {
  return (
    <View style={styles.container}>
          <Image source={require('../../../../assets/fondo.jpg')} style={styles.back}/>
          <View style={styles.login}>
            <Text style={styles.loginTitle}>Recuperar Contraseña</Text>
            <Text style={styles.textRecovery}>Enviaremos a tu correo, un enlace para que puedas modificar tu contraseña</Text>
            <View style={styles.loginForm}>
                <Text style={styles.loginFormTitles}>Ingresa tu correo:</Text>
                <TextInput  placeholder='ejemplo@gmail.com' keyboardType='email-address' style={styles.loginFormInputs}/>
                <Button title='Enviar' color='#1c2bff'/>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    back:{
      width: '100%',
      height: '100%',
    },
    login: {
      backgroundColor: 'white',
      width: '80%',
      height: '40%',
      position: 'absolute',
      borderRadius: 30,
      padding: 50,
    },
    loginTitle: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingBottom: 25,
    },
    loginForm: {
      flex: 1,
      flexDirection: 'column',
    },
    loginFormTitles: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingBottom: 5,
    },
    loginFormInputs:{
      paddingBottom: 10,
      fontSize: 15
    },
    textRecovery: {
        fontSize: 20,
        paddingBottom: 20,
    },
  });
  