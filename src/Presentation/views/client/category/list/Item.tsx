import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { Category } from '../../../../../Domain/entities/Category';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';

interface Props {
    category: Category,
    height: number,
    width: number,
    navigation: StackNavigationProp<ClientStackParamList, "ClientCategoryListScreen", undefined>
}

export const ClientCategoryItem = ({ category, height, width, navigation }: Props) => {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('ClientProductListScreen', { idCategory: category.idTipo_Producto! })
            }}
            style={{ ...styles.container, height: height, width: width }}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../../../../../../assets/carruselfondo.jpg')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{category.nombre_tipo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        paddingBottom: 20,
        paddingTop: 15,
        paddingHorizontal: 4,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image: {
        flex: 1,
        resizeMode: 'stretch',
        width: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        opacity: 0.9

    },
    titleContainer: {
        height: 50,
        backgroundColor: '#2f6edc',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
})