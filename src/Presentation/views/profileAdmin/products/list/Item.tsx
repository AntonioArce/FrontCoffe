import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, Alert, Pressable } from 'react-native';
import { Product } from '../../../../../Domain/entities/Product';
import { Category } from '../../../../../Domain/entities/Category';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ProductStackParamList } from '../../../../navigator/AdminProductNavigator';


interface Props {
    product: Product;
    category: Category;
    remove: (product: Product) => void;
}

export const AdminProductListItem = ({ product, category, remove }: Props) => {
    const navigation = useNavigation<StackNavigationProp<ProductStackParamList>>()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: product.imagen }} />
                <View style={styles.info}>
                    <Text style={styles.title}>{product.nombre}</Text>
                    <Text style={styles.description}>{product.descripcion}</Text>
                    <Text style={styles.price}>${product.precio}</Text>
                    <Text style={styles.price}> Stock:{product.stock}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('AdminProductUpdateScreen', { product: product, category: category })}>
                        <Image style={styles.actionImage} source={require('../../../../../../assets/editar.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Image style={styles.actionImage} source={require('../../../../../../assets/eliminar.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>¿Esta seguro de eliminar esta categoria?</Text>
                        <Text style={styles.modalText}>Si elimina la categoria, eliminara todos sus productos relacionados a esta</Text>
                        <Text style={styles.modalText}>Esta acción es irreversible</Text>
                        <Pressable
                            style={[styles.buttonY, styles.buttonCloseYes]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                remove(product)
                            }
                            }>
                            <Text style={styles.textStyle}>SI</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>NO</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 110,
        marginHorizontal: 20,
        marginTop: 10,
        paddingTop: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info: {
        marginLeft: 15,
        flex: 1
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    description: {
        color: 'gray',
        fontSize: 12,
        marginTop: 3
    },
    price: {
        color: 'green',
        fontSize: 15,
        fontWeight: 'bold'
    },
    actionContainer: {
        marginRight: 40
    },
    actionImage: {
        width: 35,
        height: 35,
        marginVertical: 2
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 30,
        flex: 1
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        top: 8,
    },
    buttonY: {
        borderRadius: 10,
        padding: 10,
        paddingLeft: 12,
        paddingRight: 12,
        elevation: 2,
    },
    buttonOpen: { //#DC143C
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#00A86B',
    },
    buttonCloseYes: { // #DC143C
        backgroundColor: '#DC143C',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});