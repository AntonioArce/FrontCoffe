import React from 'react'
import { View, TextInput, StyleSheet, KeyboardType } from 'react-native';

interface Props{
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
}: Props) => {
  return (
    <View style = {styles.formInput}>
        <TextInput placeholder={placeholder} 
            style= {styles.formTextInput} 
            keyboardType={keyboardType} 
            value={value}
            onChangeText={ text => onChangeText(property, text) } 
            secureTextEntry = {secureTextEntry}
        /> 
    </View>
  )
}


const styles = StyleSheet.create({
    formIcon:{
        width: 25,
        height: 25,
        marginTop: 5,
      },
      formInput:{
        flexDirection: 'row',
        marginTop: 30,
      },
      formTextInput:{
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginLeft: 15,
      },
})