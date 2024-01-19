import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";
import { ShoppingBagProvider } from "../context/ShoppingBagContext";
import { Image, TouchableOpacity } from "react-native";
import { ClientShoppingBagScreen } from "../views/client/shopping_bag/ShoppingBag";
import { ClientPaymentFormScreen } from "../views/client/payment/form/PaymentForm";
import { ClientPaymentInstallmentsScreen } from "../views/client/payment/installments/PaymentInstallments";
import { ResponseMercadoPagoCardToken } from "../../Data/sources/remote/models/ResponseMercadoPagoCardToken";
import { ResponseMercadoPagoPayment } from "../../Data/sources/remote/models/ResponseMercadoPagoPayment";
import { ClientPaymentStatusScreen } from "../views/client/payment/status/PaymentStatus";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
    ClientProductListScreen: { idCategory: string },
    ClientProductDetailScreen: { product: Product },
    ClientShoppingBagScreen: undefined,
    ClientPaymentFormScreen: undefined,
    ClientPaymentInstallmentsScreen: { cardToken: ResponseMercadoPagoCardToken },
    ClientPaymentStatusScreen: { paymentData: ResponseMercadoPagoPayment }
}

const Stack = createNativeStackNavigator<ClientStackParamList>()

export const ClientStackNavigator = () => {
    return (
        <ShoppingBagState>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ClientCategoryListScreen" component={ClientCategoryListScreen} options={({ route, navigation }) => (
                    {
                        headerShown: true,
                        title: 'Categorias',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                                <Image
                                    source={require('../../../assets/carros.png')}
                                    style={{ width: 35, height: 35 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                )} />
                <Stack.Screen name="ClientProductListScreen" component={ClientProductListScreen} options={({ route, navigation }) => (
                    {
                        headerShown: true,
                        title: 'Productos',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('ClientShoppingBagScreen')}>
                                <Image
                                    source={require('../../../assets/carros.png')}
                                    style={{ width: 35, height: 35 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                )} />
                <Stack.Screen name="ClientProductDetailScreen" component={ClientProductDetailScreen} />
                <Stack.Screen name="ClientShoppingBagScreen" component={ClientShoppingBagScreen} options={({ route, navigation }) => (
                    {
                        headerShown: true,
                        title: 'Mi orden',
                    }
                )} />
                <Stack.Screen name="ClientPaymentFormScreen" component={ClientPaymentFormScreen} options={({ route, navigation }) => (
                    {
                        headerShown: true,
                        title: 'Formulario de pago',
                    }
                )} />
                <Stack.Screen name="ClientPaymentInstallmentsScreen" component={ClientPaymentInstallmentsScreen} options={({ route, navigation }) => (
                    {
                        headerShown: true,
                        title: 'Numero de Cuotas',
                    }
                )} />
                <Stack.Screen name="ClientPaymentStatusScreen" component={ClientPaymentStatusScreen} options={({ route, navigation }) => (
                    {
                        /*  headerShown: true, */
                        title: 'PAGO',
                    }
                )} />
            </Stack.Navigator>
        </ShoppingBagState>
    )
}

const ShoppingBagState = ({ children }: any) => {
    return (
        <ShoppingBagProvider>
            {children}
        </ShoppingBagProvider>
    )
}

