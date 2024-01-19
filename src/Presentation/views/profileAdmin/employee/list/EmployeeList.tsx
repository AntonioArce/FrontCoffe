import React from 'react'
import { View, Text, FlatList, ToastAndroid } from 'react-native'
import useViewModel from './ViewModel'
import { AdminEmployeeListItem } from './Item'
import { useEffect } from 'react';

export const AdminEmployeeListScreen = () => {
  const { employee, responseMessage, deleteEmployee} = useViewModel()

  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])

  return (
    <View  style={{backgroundColor: 'white'}}>
      <FlatList
        data={employee}
        keyExtractor={ (item) => item.idUsuario! }
        renderItem={({ item }) => <AdminEmployeeListItem trabajador={item} remove={deleteEmployee}/>}
      />
    </View>
  )
}
