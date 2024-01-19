import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator'
import { StackScreenProps } from '@react-navigation/stack'
import useViewModel from './ViewModel'
import styles from './Styles'
import { OrderDetailItem } from './Item'
import { DateFormatter } from '../../../../Utils/DateFormatter'
import { RoundedButton } from '../../../../components/RoundedButton'

interface Props extends StackScreenProps<ClientOrderStackParamList, 'ClientOrderDetailScreen'> { };

export const ClientOrderDetailScreen = ({ navigation, route }: Props) => {
    const { order } = route.params
    const { total, responseMessage, prepareOrder, deliveredOrder, fineOrder } = useViewModel(order)
    return (
        <View style={styles.container}>
            <View style={styles.products}>
                <FlatList
                    data={order.products}
                    keyExtractor={(item) => item.id!}
                    renderItem={({ item }) => <OrderDetailItem product={item} />}
                />
            </View>
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/hombre.png')}
                    />
                </View>
                <View style={styles.infoRow}>
                    <View style={styles.infoText}>
                        <Text style={styles.infoTitle}>Fecha del pedido:</Text>
                        <Text style={styles.infoDescription}>{DateFormatter(order.timestamp!)} </Text>
                    </View>
                    <Image
                        style={styles.infoImage}
                        source={require('../../../../../../assets/reloj.png')}
                    />
                </View>
                <View style={styles.totalInfo}>
                    <Text style={styles.total}>TOTAL: ${total}</Text>
                </View>
            </View>
        </View>
    )
}
