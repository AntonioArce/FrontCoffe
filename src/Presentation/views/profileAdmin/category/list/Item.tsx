import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Pressable, Alert, Modal } from 'react-native';
import { Category } from '../../../../../Domain/entities/Category';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CategoryStackParamList } from '../../../../navigator/AdminCategoryNavigator';


interface Props {
    category: Category;
    remove: (id: string) => void;
}

export const AdminCategoryListItem = ({ category, remove }: Props) => {
    const navigation = useNavigation<StackNavigationProp<CategoryStackParamList>>()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('AdminProductNavigator', { category: category })}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../../../../../assets/comida.jpg')} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{category.nombre_tipo}</Text>
                        <Text style={styles.description}>{category.descripcion}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AdminCategoryUpdateScreen', { category: category })}
                        >
                            <Image style={styles.actionimage} source={require('../../../../../../assets/editar.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                        >
                            <Image style={styles.actionimage} source={require('../../../../../../assets/eliminar.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.divider}></View>
            </ScrollView>
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
                                remove(category.idTipo_Producto!)
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
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        height: 80,
        marginHorizontal: 20,
        marginTop: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    info: {
        marginLeft: 10,
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
    actionContainer: {
        marginRight: 50,

    },
    actionimage: {
        width: 30,
        height: 30,
        marginVertical: 2
    },
    divider: {
        height: 1,
        backgroundColor: '#f2f2f2',
        marginHorizontal: 20,
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
})