import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import { Product } from '../../../../../Domain/entities/Product';

interface Props {
    product: Product
}
export const OrderDetailItem = ({ product }: Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imagen }}
                style={styles.image}
            />

            <View style={styles.productInfo}>
                <Text style={styles.name}>{product.nombre}</Text>
                <Text style={styles.quantity}>Cantidad: {product.quantity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 15
    },
    productInfo: {
        marginLeft: 18
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    quantity: {
        fontSize: 22,
        marginTop: 5
    }
})
