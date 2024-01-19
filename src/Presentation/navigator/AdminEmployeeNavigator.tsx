import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AdminEmployeeProvider } from '../context/AdminEmployeeContext';
import { AdminEmployeeListScreen } from '../views/profileAdmin/employee/list/EmployeeList';
import { AdminEmployeeCreateScreen } from '../views/profileAdmin/employee/create/EmployeeCreate';
import { AdminEmployeeUpdateScreen } from '../views/profileAdmin/employee/update/EmployeeUpdate';
import { User } from '../../Domain/entities/User';

export type EmployeeStackParamList = {
  AdminEmployeeListScreen: undefined,
  AdminEmployeeCreateScreen: undefined,
  AdminEmployeeUpdateScreen: {user: User}
}

const Stack = createNativeStackNavigator<EmployeeStackParamList>();

export const AdminEmployeeNavigator = () => {
  return (
    <EmployeeState>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AdminEmployeeListScreen" component={AdminEmployeeListScreen} 
          options={({route, navigation})=>(
            {
              headerShown: true,
              title: 'Empleados',
              headerRight: () =>(
                <TouchableOpacity onPress={() => navigation.navigate('AdminEmployeeCreateScreen')}>
                <Image 
                    source={ require('../../../assets/add.png') }
                    style={{ width:35, height: 35 }}
                />
                </TouchableOpacity>
              )
            }
          )}
        />
        <Stack.Screen name="AdminEmployeeCreateScreen" component={AdminEmployeeCreateScreen} options={{headerShown: true, title: 'Nuevo Empleado'}}/>
        <Stack.Screen name="AdminEmployeeUpdateScreen" component={AdminEmployeeUpdateScreen} options={{headerShown: true, title: 'Editar Empleado'}}/>
      </Stack.Navigator>
    </EmployeeState>
  )
}


export const EmployeeState = ({children}:any) =>{
  return (
    <AdminEmployeeProvider>
      { children }
    </AdminEmployeeProvider>
  )
}