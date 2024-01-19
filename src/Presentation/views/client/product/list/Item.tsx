import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Product } from '../../../../../Domain/entities/Product';
import { StackNavigationProp } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';


interface Props {
    product: Product;
    navigation: StackNavigationProp<ClientStackParamList, 'ClientProductListScreen'>
}

export const ClientProductListItem = ({ product, navigation }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClientProductDetailScreen', { product: product })}
        >
            <View style={styles.container}>


                <View style={styles.info}>
                    <Text style={styles.title}>{product.nombre}</Text>
                    <Text style={styles.description}>{product.descripcion}</Text>
                    <Text style={styles.price}>${product.precio}</Text>
                </View>

                <Image
                    style={styles.image}
                    source={{ uri: product.imagen }}
                />

            </View>
            <View style={styles.divider}></View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 120,
        // marginHorizontal: 20,
        paddingHorizontal: 20,
        marginTop: 10,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    description: {
        color: 'gray',
        fontSize: 18,
        marginTop: 3
    },
    price: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
    actionContainer: {
        marginRight: 40
    },
    actionImage: {
        width: 25,
        height: 25,
        marginVertical: 2
    },
    divider: {
        height: 2,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 25,
        flex: 1
    }
});