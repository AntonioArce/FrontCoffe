import { Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AdminOrderStackNavigator } from './AdminOrderStackNavigator';
import { WorkScreen } from '../views/profileWork/Work';
import { EmployeeOrderStackNavigator } from './EmployeeOrderStackNavigator';

const Tab = createBottomTabNavigator();

export const EmployeeTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        
        <Tab.Screen name="EmployeeOrderStackNavigator" component={ EmployeeOrderStackNavigator }
            options={{
                title: 'Pedidos',
                tabBarLabel: 'Pedidos',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/order.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
        <Tab.Screen name="WorkScreen" component={ WorkScreen }
            options ={{
                headerShown: true,
                title: 'Perfil de Trabajador',
                tabBarLabel: 'Perfil de Trabajador',
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../../assets/profileadmin.png')} style={{width: 25, height: 25}}/>
                )
            }}
        />
    </Tab.Navigator>
  );
}