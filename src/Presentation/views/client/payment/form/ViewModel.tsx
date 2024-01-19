import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native"
import { CreateCardTokenMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreateCardTokenMercadoPago';
import { CardTokenParams, Cardholder } from '../../../../../Data/sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardToken } from "../../../../../Data/sources/remote/models/ResponseMercadoPagoCardToken";

const ClientPaymentFormViewModel = () => {
    const creditCardRef = useRef() as any;
    const [cardToken, setCardToken] = useState<ResponseMercadoPagoCardToken>()
    const [values, setValues] = useState({
        brand: '',
        cvv: '',
        expiration: '',
        holder: '',
        number: ''
    })

    useEffect(() => {
        //console.log('VALUES FROM: ' + JSON.stringify(values, null, 3));
        if (values.brand !== ''
            && values.cvv !== ''
            && values.expiration !== ''
            && values.holder !== ''
            && values.number !== '') {
            createCardToken()
        }
    }, [values])

    const createCardToken = async () => {
        console.log('METODO CARD TOKEN: ');

        const data: CardTokenParams = {
            card_number: values.number.replace(/\s/g, ''),
            expiration_year: values.expiration.split('/')[1],
            expiration_month: parseInt(values.expiration.split('/')[0]),
            security_code: values.cvv,
            cardholder: {
                name: values.holder
            }

        }
        console.log('DATA: ' + JSON.stringify(data, null, 3));

        const result = await CreateCardTokenMercadoPagoUseCase(data)
        if (result) {
            if (result.id !== '') {
                setCardToken(result)
            }
        }
        console.log('RESPONSE MERCADO PAGO: ' + JSON.stringify(result, null, 3));
    }


    const handleSubmit = React.useCallback(() => {
        if (creditCardRef.current) {
            const { error, data } = creditCardRef.current.submit();
            if (error === null) {
                setValues(data)
            }
            console.log('ERROR: ', error);
            console.log('CARD DATA: ', data);
        }
    }, []);
    return {
        creditCardRef,
        cardToken,
        handleSubmit
    }
}

export default ClientPaymentFormViewModel