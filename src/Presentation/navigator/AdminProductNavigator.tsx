import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { AdminProductListScreen } from '../views/profileAdmin/products/list/ProductList';
import { Category } from '../../Domain/entities/Category';
import { StackScreenProps } from '@react-navigation/stack';
import { CategoryStackParamList } from './AdminCategoryNavigator';
import { AdminProductCreateScreen } from '../views/profileAdmin/products/create/ProductCreate';
import { Image, TouchableOpacity } from 'react-native';
import { ProductProvider } from '../context/ProductContext';
import { AdminProductUpdateScreen } from '../views/profileAdmin/products/update/ProductUpdate';
import { Product } from '../../Domain/entities/Product';

export type ProductStackParamList = {
    AdminProductListScreen: {category: Category}
    AdminProductCreateScreen: {category: Category}
    AdminProductUpdateScreen: {category: Category, product: Product}
}

const Stack = createNativeStackNavigator<ProductStackParamList>()
interface Props extends StackScreenProps<CategoryStackParamList, 'AdminProductNavigator'>{}


export const AdminProductNavigator = ({navigation, route}: Props) => {
  return (
    <ProductProvider>
      <Stack.Navigator
          screenOptions={{
              headerShown: false
            }}
            >
            <Stack.Screen name="AdminProductListScreen" component={ AdminProductListScreen } initialParams={{category: route.params.category}}
              options ={ ({route, navigation}) =>( 
                {
                  headerShown: true,
                  title: 'Productos',
                  headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProductCreateScreen')}>
                        <Image 
                            source={ require('../../../assets/add.png') }
                            style={{ width:35, height: 35 }}
                        />
                        </TouchableOpacity>
                    )
                }
            )}
            />
            <Stack.Screen name="AdminProductCreateScreen" component={ AdminProductCreateScreen } initialParams={{category: route.params.category}}
              options={{
                headerShown: true,
                title: 'Crear Producto'
              }}
            />
            <Stack.Screen name="AdminProductUpdateScreen" component={ AdminProductUpdateScreen } 
              options={{
                headerShown: true,
                title: 'Modificar Producto'
              }}
            />

      </Stack.Navigator>
    </ProductProvider>
  )
}

const ProductState = ({children}: any) =>{
  return(
    <ProductProvider>
      { children }
    </ProductProvider>
  )
}