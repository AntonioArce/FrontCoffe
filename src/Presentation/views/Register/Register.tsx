import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, ToastAndroid, Modal, Alert, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';

import useViewModel from './ViewModel'
import styles from './Styles'
import { RootStackParamList } from '../../navigator/MainStackNavigator';

export const RegisterScreen = () => {
      const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
      const [visiblePassword, setVisiblePassword] = useState(true)
      const [visibleConfirm, setVisibleConfirm] = useState(true)
      const { nombre, apellido_paterno, apellido_materno, num_telefono, contrasena, correo, confirmPassword,
            errorMessage, setErrorMessage, successMessage, onChange, Register, modal, setModal } = useViewModel()
      useEffect(() => {
            if (errorMessage != '') {
                  ToastAndroid.show(errorMessage, ToastAndroid.LONG)
                  setErrorMessage('')
            }
      }, [errorMessage])

      return (
            <View style={styles.container}>
                  <Image source={require('../../../../assets/cafes.jpg')} style={styles.back} />
                  <View style={styles.login}>
                        <Text style={styles.loginTitle}>Ingresa tus datos</Text>
                        <View style={styles.loginForm}>
                              <ScrollView style={{ marginBottom: 20 }}>
                                    <CustomTextInput
                                          placeholder='Nombres'
                                          keyboardType='default'
                                          property='nombre'
                                          onChangeText={onChange}
                                          value={nombre}
                                    />
                                    <CustomTextInput
                                          placeholder='Apellido Paterno'
                                          keyboardType='default'
                                          property='apellido_paterno'
                                          onChangeText={onChange}
                                          value={apellido_paterno}
                                    />
                                    <CustomTextInput
                                          placeholder='Apellido Materno'
                                          keyboardType='default'
                                          property='apellido_materno'
                                          onChangeText={onChange}
                                          value={apellido_materno}
                                    />
                                    <CustomTextInput
                                          placeholder='Telefono'
                                          keyboardType='decimal-pad'
                                          property='num_telefono'
                                          onChangeText={onChange}
                                          value={num_telefono}
                                    />
                                    <CustomTextInput
                                          placeholder='Correo Electronico'
                                          keyboardType='email-address'
                                          property='correo'
                                          onChangeText={onChange}
                                          value={correo}
                                    />

                                    <CustomTextInput
                                          placeholder='Contraseña'
                                          keyboardType='default'
                                          property='contrasena'
                                          onChangeText={onChange}
                                          value={contrasena}
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
                                    <CustomTextInput
                                          placeholder='Confirme su contraseña'
                                          keyboardType='default'
                                          property='confirmPassword'
                                          onChangeText={onChange}
                                          value={confirmPassword}
                                          secureTextEntry={visibleConfirm}
                                    />
                                    <TouchableOpacity onPress={() => {
                                          if (visibleConfirm)
                                                setVisibleConfirm(false)
                                          else
                                                setVisibleConfirm(true)
                                    }}>
                                          <Image style={styles.eye} source={require('../../../../assets/testigo.png')} />
                                    </TouchableOpacity>
                              </ScrollView>
                              <View style={{ top: 5 }}>
                                    <RoundedButton text='REGISTRARSE' onPress={() => Register()} />
                              </View>
                        </View>
                  </View>
                  <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modal}
                        onRequestClose={() => {
                              Alert.alert('Modal has been closed.');
                              setModal(!modal);
                        }}>
                        <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Tu usuario fue creado con éxito</Text>
                                    <Pressable
                                          style={[styles.button, styles.buttonClose]}
                                          onPress={() => {
                                                setModal(!modal)
                                                navigation.replace('HomeScreen')
                                          }}>
                                          <Text style={styles.textStyle}>Cerrar</Text>
                                    </Pressable>
                              </View>
                        </View>
                  </Modal>
            </View>
      )
}

