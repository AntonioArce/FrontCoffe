import React from 'react'
import { Category } from '../../Domain/entities/Category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryProvider } from '../context/CategoryContext';
import { AdminCategoryCreateScreen } from '../views/profileAdmin/category/create/CategoryCreate';
import { AdminCategoryUpdateScreen } from '../views/profileAdmin/category/update/CategoryUpdate';
import { AdminCategoryList } from '../views/profileAdmin/category/list/CategoryList';
import { Image, TouchableOpacity } from 'react-native';
import { AdminProductNavigator } from './AdminProductNavigator';

export type CategoryStackParamList = {
    AdminCategoryList: undefined,
    AdminCategoryCreateScreen: undefined,
    AdminCategoryUpdateScreen: {category: Category},
    AdminProductNavigator: {category: Category}
}

const Stack = createNativeStackNavigator<CategoryStackParamList>();

export const AdminCategoryNavigator = () => {
  return (
    <CategoryState>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AdminCategoryList" component={AdminCategoryList} 
                options ={ ({route, navigation}) =>( 
                    {
                        headerShown: true,
                        title: 'Categorias',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('AdminCategoryCreateScreen')}>
                            <Image 
                                source={ require('../../../assets/add.png') }
                                style={{ width:35, height: 35 }}
                            />
                            </TouchableOpacity>
                        )
                    }
                )}
            />
            <Stack.Screen name="AdminCategoryCreateScreen" component={AdminCategoryCreateScreen} options={{headerShown: true, title: 'Nueva Categoria'}}/>
            <Stack.Screen name="AdminCategoryUpdateScreen" component={AdminCategoryUpdateScreen} options={{headerShown: true, title: 'Editar Categoria'}}/>
            <Stack.Screen name="AdminProductNavigator" component={AdminProductNavigator}/>
        </Stack.Navigator>
    </CategoryState>
  )
}


const CategoryState = ({children}:any) =>{
    return (
      <CategoryProvider>
        { children }
      </CategoryProvider>
    )
  }