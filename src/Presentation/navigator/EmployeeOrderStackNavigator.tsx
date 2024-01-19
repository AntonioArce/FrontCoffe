import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Order } from '../../Domain/entities/Order';
import { AdminOrderListScreen } from '../views/profileAdmin/order/list/OrderList'; 
import { AdmminOrderDetailScreen } from '../views/profileAdmin/order/detail/OrderDetail';
import { OrderProvider } from '../context/OrderContext';
import { EmployeeOrderListScreen } from '../views/profileWork/order/list/OrderList';
import { WorkScreen } from '../views/profileWork/Work';
import { EmployeeOrderDetailScreen } from '../views/profileWork/order/detail/OrderDetail';

export type EmployeeOrderStackParamList = {
    EmployeeOrderListScreen: {isUpdate: boolean} | undefined,
    EmployeeOrderDetailScreen: {order: Order}
}

const Stack = createNativeStackNavigator<EmployeeOrderStackParamList>();
export const EmployeeOrderStackNavigator = () =>{
    return (
        <OrderStatus>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>    
                <Stack.Screen
                    name="EmployeeOrderListScreen"
                    component={EmployeeOrderListScreen}

                    />  
                <Stack.Screen
                    name="EmployeeOrderDetailScreen"
                    component={EmployeeOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalle de orden',
                    }}
                    />
            </Stack.Navigator>
        </OrderStatus>
    ) 
}

const OrderStatus = ({children}: any) =>{
    return(
        <OrderProvider>
            {children}
        </OrderProvider>
    )
}