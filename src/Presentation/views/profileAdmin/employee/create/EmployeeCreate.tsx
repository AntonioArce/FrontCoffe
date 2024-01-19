import React, {useEffect} from 'react'
import { View, Text, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import useViewModel from './ViewModel'
import Style from './Styles'


export const AdminEmployeeCreateScreen = () => {
    const { 
        nombre, apellido_paterno, apellido_materno, num_telefono, correo, contrasena, confirmPassword,
        onChange, errorMessage, createEmployee, sucess
     } = useViewModel()

     useEffect(() => {
        if(errorMessage !== '')
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }, [errorMessage])

    useEffect(() => {
        if(sucess !== '')
            ToastAndroid.show(sucess, ToastAndroid.LONG)
    }, [sucess])
    
  return (
    <View>
        <ScrollView>
            <View style={Style.title}>
                <Image source={require('../../../../../../assets/employeeR.jpg')} style={Style.image}/>
                <Text style = {{marginTop: 25}}> Registrar nuevo empleado </Text>
            </View>
            <View style={Style.form}>
                <View style = {Style.items}>
                    <Text>Nombre: </Text>
                    <CustomTextInput 
                        placeholder = 'Arce'
                        keyboardType='default'
                        property='nombre'
                        onChangeText = { onChange }
                        value = {nombre}
                        />
                    <Text style={{marginTop: 5}}>Apellido paterno</Text>
                    <CustomTextInput 
                        placeholder = 'Arce'
                        keyboardType='default'
                        property='apellido_paterno'
                        onChangeText = { onChange }
                        value = {apellido_paterno}
                        />
                    <Text style={{marginTop: 5}}>Apellido materno</Text>
                    <CustomTextInput 
                        placeholder = 'Gudiño'
                        keyboardType='default'
                        property='apellido_materno'
                        onChangeText = { onChange }
                        value = {apellido_materno}
                        />
                    <Text style={{marginTop: 5}}>Número de teléfono</Text>
                    <CustomTextInput 
                        placeholder = '123456789'
                        keyboardType='numeric'
                        property='num_telefono'
                        onChangeText = { onChange }
                        value={num_telefono}
                        />
                    <Text style={{marginTop: 5}}>Correo electrónico</Text>
                    <CustomTextInput 
                        placeholder = 'lyhxr@example.com'
                        keyboardType='email-address'
                        property='correo'
                        onChangeText = { onChange }
                        value = {correo}
                        />
                    <Text style={{marginTop: 5}}>Contraseña</Text>
                    <CustomTextInput 
                        placeholder = 'Contraseña'
                        keyboardType='default'
                        secureTextEntry = {true}
                        property='contrasena'
                        onChangeText = { onChange }
                        value = {contrasena}
                        />
                    <Text style={{marginTop: 5}}>Confirmar contraseña</Text>
                    <CustomTextInput 
                        placeholder = 'Confrime Contraseña'
                        keyboardType='default'
                        secureTextEntry = {true}
                        property='confirmPassword'
                        onChangeText = { onChange }
                        value = {confirmPassword}
                        />
                </View>
                <View style= {Style.boton}>
                    <RoundedButton text='Registrar Empleado' onPress={ () => createEmployee() }/>
                </View>
            </View>


        </ScrollView>
    </View>
  )
}
