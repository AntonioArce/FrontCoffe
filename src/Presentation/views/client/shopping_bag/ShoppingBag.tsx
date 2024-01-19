import React, { useContext, useEffect, useState } from 'react'
import { View, Text, FlatList, ToastAndroid, Alert, Pressable, Modal } from 'react-native'
import useViewModel from './ViewModel';
import { ShoppingBagItem } from './Item';
import { RoundedButton } from '../../../components/RoundedButton';
import styles from './Styles';
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../navigator/ClientStackNavigator';
import { UserContext } from '../../../context/UserContext';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientShoppingBagScreen'> { };

export const ClientShoppingBagScreen = ({ navigation, route }: Props) => {

  const { shoppingBag, total, responseMessage, addItem, subtractItem, deleteItem, createOrder } = useViewModel();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (responseMessage !== '') {
      ToastAndroid.show(responseMessage, ToastAndroid.LONG)
    }
  }, [responseMessage])

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingBag}
        keyExtractor={(item) => item.idProductos!}
        renderItem={({ item }) =>
          <ShoppingBagItem
            product={item}
            addItem={addItem}
            subtractItem={subtractItem}
            deleteItem={deleteItem}
          />
        }
      />

      <View style={styles.totalToPay}>
        <View style={styles.totalInfo}>
          <Text style={styles.totalText}>Total</Text>
          <Text>${total}</Text>
        </View>

        <View style={styles.buttonAdd}>
          {/* <RoundedButton text='CONTINUAR CON EL PAGO' onPress={() =>{
                if(shoppingBag.length === 0){
                  ToastAndroid.show('No tiene productos en el carrito', ToastAndroid.LONG)
                }
                else{
                  createOrder()
                }
            }} /> */}
          <RoundedButton text='CONTINUAR CON EL PAGO' onPress={() => {
            if (shoppingBag.length == 0) {
              setModalVisible(true)
            } else {
              navigation.navigate('ClientPaymentFormScreen')
            }
          }} />
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
            <Text style={styles.modalText}>---------------------------------------------------</Text>
            <Text style={styles.modalText}>Tu bolsa de compras esta vacia!!</Text>
            <Text style={styles.modalText}>Para proceder al pago, necesitas minimo un producto</Text>
            <Text style={styles.modalText}>---------------------------------------------------</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}