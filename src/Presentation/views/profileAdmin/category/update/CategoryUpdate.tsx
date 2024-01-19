import React, { useEffect } from 'react'
import { View, Text, Image, TextInput, ToastAndroid } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput'
import { RoundedButton } from '../../../../components/RoundedButton'
import { StackScreenProps } from '@react-navigation/stack'
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator'
import useViewModel from './ViewModel'
import Style from './Styles'

interface Props extends StackScreenProps<CategoryStackParamList, 'AdminCategoryUpdateScreen'> { }

export const AdminCategoryUpdateScreen = ({ navigation, route }: Props) => {
    const { category } = route.params
    const { nombre_tipo, descripcion, onChange, errorMessage, updateCategory, success } = useViewModel(category)
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
        <View style={Style.container}>
            <View style={Style.logoContainer}>
                <Image source={require('../../../../../../assets/newCat.jpg')} style={Style.logoImage} />
                <Text style={{ marginTop: 25 }}> Modificar categoria </Text>
            </View>
            <View style={Style.form}>
                <View style={Style.logoText}>
                    <Text style={{ marginLeft: 9, marginTop: 0, fontSize: 18 }}>Nombre de la categoria</Text>
                    <CustomTextInput
                        placeholder='Nombre de la categoria'
                        keyboardType='default'
                        property='nombre_tipo'
                        onChangeText={onChange}
                        value={nombre_tipo}
                    />
                    <Text style={{ marginLeft: 9, marginTop: 15, fontSize: 18 }}>Descripcion de la categoria</Text>
                    <CustomTextInput
                        placeholder='Agregar una descripcion corta'
                        keyboardType='default'
                        property='descripcion'
                        onChangeText={onChange}
                        value={descripcion}
                    />
                </View>
                <View style={Style.boton}>
                    <RoundedButton text='Modificar' onPress={() => updateCategory()} />
                </View>
            </View>


        </View>
    )
}
