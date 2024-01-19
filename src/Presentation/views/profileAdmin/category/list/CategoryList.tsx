import React, {useEffect} from 'react'
import { View, Text, FlatList, ToastAndroid } from 'react-native'
import useViewModel from './ViewModel'
import { AdminCategoryListItem } from './Item'

export const AdminCategoryList = () => {
  const { categories, getCategories, deleteCategory, responseMessage } = useViewModel()

  useEffect(() => {
    if(responseMessage !== ''){
      ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])
  
  
  return (
    <View style={{backgroundColor: 'white'}}>
      <FlatList
        data={ categories }
        keyExtractor={ (item) => item.idTipo_Producto! }
        renderItem={ ({ item }) => <AdminCategoryListItem category={item} remove={deleteCategory}/>
        }
      />
    </View>
  )
}
