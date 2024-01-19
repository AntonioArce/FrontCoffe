import { StackNavigationProp } from "@react-navigation/stack";
import { Order } from "../../../../../Domain/entities/Order";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DateFormatter } from "../../../../Utils/DateFormatter";
import { ClientOrderStackParamList } from "../../../../navigator/ClientOrderStackNavigator";

interface Props {
    order: Order,
    navigation: StackNavigationProp<ClientOrderStackParamList, 'ClientOrderListScreen', undefined>
}

export const OrderListItem = ({ order, navigation }: Props) => {
    const dynamicStyle = order.estado == '4' ? styles.deliveredContainer : styles.container
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClientOrderDetailScreen', { order: order })}
        >
            <View style={[styles.container, dynamicStyle]}>
                <Text style={styles.order}>FOLIO #00{order.id}</Text>
                <Text style={{ ...styles.info, marginTop: 10 }}>Fecha del pedido: {DateFormatter(order.timestamp!)}</Text>
                <View style={styles.divider}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        paddingLeft: 20
    },
    order: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
        marginTop: 10
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#e2e2e2',
        marginTop: 10
    },
    info: {
        fontSize: 13
    },
    deliveredContainer: {
        backgroundColor: '#00B894'
    },
});