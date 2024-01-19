import { useEffect } from "react"
import { Image, Pressable, TouchableOpacity, View } from "react-native"
import { Platform } from 'expo-modules-core'
import { RoundedButton } from "../../../../components/RoundedButton";
import CreditCard from 'react-native-credit-card-form-ui';
import styles from "./Styles"
import useViewModel from "./ViewModel"
import { MyColors } from "../../../../theme/AppTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { ClientStackParamList } from "../../../../navigator/ClientStackNavigator";

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentFormScreen'> { }

export const ClientPaymentFormScreen = ({ navigation, route }: Props) => {
    const { creditCardRef, handleSubmit, cardToken } = useViewModel()
    useEffect(() => {
        console.log('CARD TOKE: ' + JSON.stringify(cardToken, null, 3));

        if (cardToken !== undefined && cardToken !== null) {
            navigation.navigate('ClientPaymentInstallmentsScreen', { cardToken: cardToken })
        }
    }, [cardToken])

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <CreditCard ref={creditCardRef} background={"#e2e2e2"}
                    textColor="black"
                    labels={{
                        holder: 'Titular',
                        cvv: 'Codigo de Seguridad',
                        expiration: 'Expiracion'
                    }}
                    placeholders={{
                        number: '0000 0000 0000 0000',
                        cvv: 'xxx',
                        expiration: "MM/YYYY",
                        holder: 'NOMBRE DEL TITULAR'
                    }}
                    placeholderTextColor="gray"
                />
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => handleSubmit()}>
                    <Image
                        style={styles.check}
                        source={require('../../../../../../assets/cheque.png')}
                    />
                </Pressable>
                {/* <RoundedButton text='CONTINUAR' onPress={() => handleSubmit()} /> */}
            </View>
        </View>
    )
}