import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Touchable, ScrollView, Alert, Pressable, Modal } from 'react-native';
import { User } from '../../../../../Domain/entities/User';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { EmployeeStackParamList } from '../../../../navigator/AdminEmployeeNavigator';

interface Props {
    trabajador: User,
    remove: (id: string) => void;
}

export const AdminEmployeeListItem = ({ trabajador, remove }: Props) => {
    const navigation = useNavigation<StackNavigationProp<EmployeeStackParamList>>()
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <TouchableOpacity>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../../../../../../assets/worker.png')} />
                    <View style={styles.info}>
                        <Text style={styles.title}>{trabajador.nombre} {trabajador.apellido_paterno} {trabajador.apellido_materno}</Text>
                        <Text style={styles.description}>{trabajador.correo}</Text>
                        <Text style={styles.description}>{trabajador.num_telefono}</Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AdminEmployeeUpdateScreen', { user: trabajador })}
                        >
                            <Image style={styles.actionimage} source={require('../../../../../../assets/editar.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(true)
                            }}
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
                        <Text style={styles.modalText}>¿Esta seguro de eliminar a este empleado?</Text>
                        <Text style={styles.modalText}>Esta acción es irreversible</Text>
                        <Pressable
                            style={[styles.buttonY, styles.buttonCloseYes]}
                            onPress={() => {
                                setModalVisible(!modalVisible)
                                remove(trabajador.idUsuario!)
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

// remove(trabajador.idUsuario!)

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
        backgroundColor: '#f2f2f5',
        marginHorizontal: 10,
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
        padding: 35,
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
        marginBottom: 15,
        textAlign: 'center',
    },
})