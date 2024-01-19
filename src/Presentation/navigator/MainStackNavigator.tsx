import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { HomeScreen } from '../../../src/Presentation/views/Home/Home';
import { RegisterScreen } from '../../../src/Presentation/views/Register/Register';
import { RecoveryScreen } from '../../../src/Presentation/views/Recovery/Recovery';
import { WorkScreen } from '../../../src/Presentation/views/profileWork/Work';
import { AdminTabsNavigator } from '../../../src/Presentation/navigator/AdminTabs.Navigator';
import { ClientTabsNavigator } from './ClientTabsNavigator';
import { User } from '../../Domain/entities/User';
import { ProfileUpdateScreen } from '../views/profile/update/ProfileUpdate';
import { UserProvider } from '../context/UserContext';
import { EmployeeTabsNavigator } from './EmployeeTabsNavigator';


export type RootStackParamList = {
    HomeScreen: undefined,
    RegisterScreen: undefined,
    RecoveryScreen: undefined,
    AdminTabsNavigator: undefined,
    ClientTabsNavigator: undefined,
    EmployeeTabsNavigator: undefined,
    ProfileUpdateScreen: {user: User}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
  return (
    <UserState>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
            <Stack.Screen name="AdminTabsNavigator" component={AdminTabsNavigator}/>
            <Stack.Screen name="ClientTabsNavigator" component={ClientTabsNavigator}/>
            <Stack.Screen name="EmployeeTabsNavigator" component={EmployeeTabsNavigator}/>
            <Stack.Screen name="ProfileUpdateScreen" component={ProfileUpdateScreen}
                  options={{
                    headerShown: true,
                    title: 'Actualizar datos'
                  }}
                  />
          </Stack.Navigator>
      </UserState>
  )
}

const UserState = ({children}: any) => {
  return (
    <UserProvider>
      { children }
    </UserProvider>
  )
}