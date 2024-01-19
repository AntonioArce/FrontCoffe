import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import { StackScreenProps } from '@react-navigation/stack'
import { EmployeeStackParamList } from '../../../../navigator/AdminEmployeeNavigator'

import useViewModel from './ViewModel'
import Style from './Styles'


interface Props extends StackScreenProps<EmployeeStackParamList, 'AdminEmployeeUpdateScreen'> { }

export const AdminEmployeeUpdateScreen = ({ navigation, route }: Props) => {
    const { user } = route.params
    const { nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, confirmPassword, onChange, errorMessage, success, updateEmployee } = useViewModel(user)
    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage])
    useEffect(() => {
        if (success !== '') {
            ToastAndroid.show(success, ToastAndroid.LONG)
        }
    }, [success])
    return (
        <View>
            <ScrollView>

                <View style={Style.title}>
                    <Image source={require('../../../../../../assets/employeeR.jpg')} style={Style.image} />
                    <Text style={{ marginTop: 25 }}> Modificar datos de Empleado </Text>
                </View>
                <View style={Style.form}>
                    <View style={Style.items}>

                        <Text>Nombre del empleado</Text>
                        <CustomTextInput
                            placeholder='Nombre de la categoria'
                            keyboardType='default'
                            property='nombre'
                            onChangeText={onChange}
                            value={nombre}
                        />
                        <Text>Apellido paterno</Text>
                        <CustomTextInput
                            placeholder='Apellido paterno'
                            keyboardType='default'
                            property='apellido_paterno'
                            onChangeText={onChange}
                            value={apellido_paterno}
                        />
                        <Text>Apellido materno</Text>
                        <CustomTextInput
                            placeholder='Apellido materno'
                            keyboardType='default'
                            property='apellido_materno'
                            onChangeText={onChange}
                            value={apellido_materno}
                        />
                        <Text>Numero de telefono</Text>
                        <CustomTextInput
                            placeholder='Numero de telefono'
                            keyboardType='numeric'
                            property='num_telefono'
                            onChangeText={onChange}
                            value={num_telefono}
                        />
                        <Text>Correo</Text>
                        <CustomTextInput
                            placeholder='Correo'
                            keyboardType='email-address'
                            property='correo'
                            onChangeText={onChange}
                            value={correo}
                        />
                    </View>
                    <View style={Style.boton}>
                        <RoundedButton
                            text='Actualizar'
                            onPress={() => updateEmployee()}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}