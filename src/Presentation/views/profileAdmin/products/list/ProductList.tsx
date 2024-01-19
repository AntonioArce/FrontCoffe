import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { View, Text, FlatList, ToastAndroid } from 'react-native'
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator'
import useViewModel from './ViewModel'
import { AdminProductListItem } from './Item'

interface Props extends StackScreenProps<ProductStackParamList, 'AdminProductListScreen'> { }
export const AdminProductListScreen = ({ navigation, route }: Props) => {
  const { category } = route.params
  const { products, responseMessage, getProducts, deleteProduct } = useViewModel();

  useEffect(() => {
    if (category.idTipo_Producto !== undefined) {
      getProducts(category.idTipo_Producto!);
    }
  }, [])

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG);
    }
  }, [responseMessage])


  return (
    <View style={{ backgroundColor: 'white' }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.idProductos!}
        renderItem={({ item }) => <AdminProductListItem product={item} remove={deleteProduct} category={category} />}
      />
    </View>
  )
}