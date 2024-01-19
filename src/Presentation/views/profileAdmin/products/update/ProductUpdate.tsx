import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image, ActivityIndicator, ToastAndroid, ScrollView } from 'react-native'
import { CustomTextInput } from '../../../../components/CustomTextInput';
import { RoundedButton } from '../../../../components/RoundedButton';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import useViewModel from './ViewModel';
import styles from './Styles'

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductUpdateScreen'> { };


export const AdminProductUpdateScreen = ({ navigation, route }: Props) => {
  const { category, product } = route.params
  const { nombre, descripcion, precio, stock, imagen, onChange, updateProduct, responseMessage, pickImage } = useViewModel(product, category)
  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => pickImage()}>
          {
            imagen == ''
              ? <Image source={require('../../../../../../assets/comida.jpg')} style={styles.logoImage} />
              : <Image source={{ uri: imagen }} style={styles.logoImage} />
          }
        </TouchableOpacity>
        <Text style={styles.logoText}>Selecciona una Imagen</Text>
      </View>
      <View style={styles.form}>
        <Text /* style = {styles.formText} */> Modificar datos del producto {product.nombre} de la categoria {category.nombre_tipo}</Text>
        <CustomTextInput
          placeholder='Nombre del producto'
          keyboardType='default'
          property='nombre'
          onChangeText={onChange}
          value={nombre}
        />
        <CustomTextInput
          placeholder='Descripcion del producto'
          keyboardType='default'
          property='descripcion'
          onChangeText={onChange}
          value={descripcion}
        />
        <CustomTextInput
          placeholder='Precio del producto'
          keyboardType='numeric'
          property='precio'
          onChangeText={onChange}
          value={`${precio}`}
        />
        <CustomTextInput
          placeholder='Stock del producto'
          keyboardType='numeric'
          property='stock'
          onChangeText={onChange}
          value={`${stock}`}
        />

        <View style={{
          top: 30
        }}>
          <RoundedButton
            text='Guardar Producto'
            onPress={() => updateProduct()}
          />
        </View>
      </View>
    </View>
  )
}
