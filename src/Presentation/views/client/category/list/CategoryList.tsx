import { StackScreenProps } from '@react-navigation/stack';
import { useEffect, useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import { ClientCategoryItem } from './Item';
import useViewModel from './ViewModel'

interface Props extends StackScreenProps<ClientStackParamList, 'ClientCategoryListScreen'> { };

export const ClientCategoryListScreen = ({ navigation, route }: Props) => {

  const { categories, getCategories } = useViewModel();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white' }}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.idTipo_Producto!}
          renderItem={({ item }) => <ClientCategoryItem category={item} height={height * 0.09} width={width - 50} navigation={navigation} />}
        />
      </View>
    </View>
  )
}

