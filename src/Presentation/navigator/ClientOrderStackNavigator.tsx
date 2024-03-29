import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Order } from "../../Domain/entities/Order"
import { OrderProvider } from "../context/OrderContext";
import { ClientOrderListScreen } from "../views/client/order/list/OrderList";
import { ClientOrderDetailScreen } from "../views/client/order/details/OrderDetail";

export type ClientOrderStackParamList = {
    ClientOrderListScreen: undefined,
    ClientOrderDetailScreen: { order: Order }
}

const Stack = createNativeStackNavigator<ClientOrderStackParamList>();
export const ClientOrderStackNavigator = () => {
    return (
        <OrderStatus>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="ClientOrderListScreen"
                    component={ClientOrderListScreen}

                />
                <Stack.Screen
                    name="ClientOrderDetailScreen"
                    component={ClientOrderDetailScreen}
                    options={{
                        headerShown: true,
                        title: 'Detalle de orden',
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