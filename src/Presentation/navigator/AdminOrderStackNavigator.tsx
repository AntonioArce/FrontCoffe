import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Order } from '../../Domain/entities/Order';
import { AdminOrderListScreen } from '../views/profileAdmin/order/list/OrderList';
import { AdmminOrderDetailScreen } from '../views/profileAdmin/order/detail/OrderDetail';
import { AdminReportCreateScreen } from '../views/profileAdmin/report/ReportCreate';
import { OrderProvider } from '../context/OrderContext';
import { Image, TouchableOpacity } from 'react-native';

export type AdminOrderStackParamList = {
    AdminOrderListScreen: { isUpdate: boolean } | undefined,
    AdminOrderDetailScreen: { order: Order },
    AdminReportCreateScreen: undefined
}

const Stack = createNativeStackNavigator<AdminOrderStackParamList>();
export const AdminOrderStackNavigator = () => {
    return (
        <OrderStatus>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="AdminOrderListScreen" component={AdminOrderListScreen}
                    options={({ route, navigation }) => ({
                        headerShown: true,
                        title: 'ORDENES',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('AdminReportCreateScreen')}>
                                <Image
                                    source={require('../../../assets/report.png')}
                                    style={{ width: 35, height: 35 }}
                                />
                            </TouchableOpacity>
                        )
                    })}
                />
                <Stack.Screen
                    name="AdminOrderDetailScreen"
                    component={AdmminOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalle de la orden'
                    }}
                />
                <Stack.Screen
                    name="AdminReportCreateScreen"
                    component={AdminReportCreateScreen}
                    options={{
                        headerShown: true,
                        title: 'Generar Reporte'
                    }}
                />
            </Stack.Navigator>
        </OrderStatus>
    )
}

const OrderStatus = ({ children }: any) => {
    return (
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}