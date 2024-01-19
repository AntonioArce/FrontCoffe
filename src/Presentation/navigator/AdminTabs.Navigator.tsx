import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminCategoryList } from '../views/profileAdmin/category/list/CategoryList';
import { AdminScreen } from '../views/profileAdmin/Admin';
import { AdminCategoryNavigator } from './AdminCategoryNavigator';
import { AdminEmployeeNavigator } from './AdminEmployeeNavigator';
import { AdminOrderListScreen } from '../views/profileAdmin/order/list/OrderList';
import { AdminOrderStackNavigator } from './AdminOrderStackNavigator';

const Tab = createBottomTabNavigator();

export const AdminTabsNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="AdminCategoryNavigator" component={AdminCategoryNavigator}
                options={
                    {
                        tabBarIcon: () => (
                            <Image
                                source={require('../../../assets/category.png')}
                                style={{ width: 25, height: 25 }}
                            />
                        ),
                        title: "Categorias"
                    }}
            />
            <Tab.Screen name="AdminEmployeeNavigator" component={AdminEmployeeNavigator}
                options={{
                    title: 'Empleados',
                    tabBarLabel: 'Empleados',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../../assets/employee.png')} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
            <Tab.Screen name="AdminOrderStackNavigator" component={AdminOrderStackNavigator}
                options={{
                    title: 'Pedidos',
                    tabBarLabel: 'Ordenes',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../../assets/order.png')} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
            <Tab.Screen name="AdminScreen" component={AdminScreen}
                options={{
                    headerShown: true,
                    title: 'Perfil de usuario',
                    tabBarLabel: 'Perfil de usuario',
                    tabBarIcon: ({ color }) => (
                        <Image source={require('../../../assets/profileadmin.png')} style={{ width: 25, height: 25 }} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}