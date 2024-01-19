import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState, useCallback } from 'react'
import { FlatList, RefreshControl, ScrollView, Text, View, useWindowDimensions } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view';
import { ClientOrderStackParamList } from '../../../../navigator/ClientOrderStackNavigator';
import { OrderListItem } from './Item';
import socket from '../../../../Utils/Socketio';
import useViewModel from './ViewModel'

interface Props {
    status: string
}


const OrderListView = ({ status }: Props) => {
    const navigation = useNavigation<StackNavigationProp<ClientOrderStackParamList, 'ClientOrderListScreen'>>();
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrders, user } = useViewModel()
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
        console.log(user.idCliente);
        getOrders(user.idCliente!, status)
    }, [status])


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        getOrders(user.idCliente!, status)
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        socket.connect()
        socket.on('connect', () => {
            console.log('CONECTADO A SOCKET IO---------------------------------------------------------------')
        })
        socket.on(`/orders/${user.idCliente!}`, (data) => {
            getOrders(user.idCliente!, status)
        })
    }, [])

    return (
        <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View>
                <FlatList
                    data={
                        status === '1'
                            ? ordersPayed
                            : status === '2'
                                ? ordersPrepared
                                : status === '3'
                                    ? ordersFine
                                    : status == '4'
                                        ? ordersDelivery
                                        : []
                    }
                    keyExtractor={(item) => item.id!}
                    renderItem={({ item }) => <OrderListItem order={item} navigation={navigation} />}
                    refreshing={refreshing}
                    onRefresh={onRefresh}

                />
            </View>
        </ScrollView>
    );
}

const renderScene = ({ route }: any) => {
    switch (route.key) {
        case 'first':
            return <OrderListView status='1' />;
        case 'second':
            return <OrderListView status='2' />
        case 'third':
            return <OrderListView status='3' />
        case 'fourth':
            return <OrderListView status='4' />
        default:
            return <OrderListView status='1' />;
    }
};

export const ClientOrderListScreen = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'PAGADO' },
        { key: 'second', title: 'PREPARACION' },
        { key: 'third', title: 'LISTO' },
        { key: 'fourth', title: 'ENTREGADO' },
    ]);
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={props => (
                <TabBar
                    {...props}

                    indicatorStyle={{ backgroundColor: '#c2c2c2' }}
                    activeColor='black'
                    inactiveColor='gray'
                    /*scrollEnabled= {true} */
                    style={{
                        backgroundColor: 'white',
                        height: 90,
                        justifyContent: 'center',
                    }}
                />
            )}
        />
    )
}
