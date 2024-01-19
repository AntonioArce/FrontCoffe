import React, { useState } from 'react'
import { Text, View, Image, TextInput, Button, Touchable, TouchableOpacity, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { RootStackParamList } from '../../navigator/MainStackNavigator';
import styles from './Styles'
import useViewModel from './ViewModel'
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> { }

export const HomeScreen = ({ navigation, route }: Props) => {
  const { email, password, errorMessage, user, onChange, login, setErrorMessage } = useViewModel();
  const [visiblePassword, setVisiblePassword] = useState(true)
  const [visibleConfirm, setVisibleConfirm] = useState(true)

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG)
      setErrorMessage('')
    }
  }, [errorMessage])

  useEffect(() => {
    console.log(user?.idUsuario)

    if (user?.idUsuario !== null && user?.idUsuario !== undefined && user?.idUsuario !== '') {
      if (user?.rol === 1) {
        navigation.replace('AdminTabsNavigator')
      }
      else if (user?.rol === 2) {
        navigation.replace('ClientTabsNavigator')
      }
      else if (user?.rol === 3) {
        navigation.replace('EmployeeTabsNavigator')
      }
    }
  }, [user])

  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/cafes.jpg')} style={styles.back} />
      <View style={styles.login}>
        <Text style={styles.loginTitle}>Iniciar sesión</Text>
        <View style={styles.loginForm}>
          <CustomTextInput
            placeholder='ejemplo@gmail.com'
            keyboardType='email-address'
            property='email'
            onChangeText={onChange}
            value={email}
          />
          <CustomTextInput
            placeholder='********************'
            keyboardType='default'
            property='password'
            onChangeText={onChange}
            value={password}
            secureTextEntry={visiblePassword}
          />
          <TouchableOpacity onPress={() => {
            if (visiblePassword)
              setVisiblePassword(false)
            else
              setVisiblePassword(true)
          }}>
            <Image style={styles.eye} source={require('../../../../assets/testigo.png')} />
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <RoundedButton text='ENTRAR' onPress={() => login()} />
            {/* <View style={styles.loginFormLinks}>
              <Text style={styles.loginFormLinkIn}>¿Olvidaste tu Contraseña?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('RecoveryScreen')}>
                <Text style={styles.loginFormRegister}>Acceda aqui</Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.loginFormLinks1}>
            <Text style={styles.loginFormLinkIn}>¿No tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.loginFormRegister}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

