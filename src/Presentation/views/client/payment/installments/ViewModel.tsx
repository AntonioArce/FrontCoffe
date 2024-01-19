import { useState, useContext, useEffect } from 'react';
import { ResponseMercadoPagoCardToken } from "../../../../../Data/sources/remote/models/ResponseMercadoPagoCardToken";
import { PayerCost, ResponseMercadoPagoInstallments } from "../../../../../Data/sources/remote/models/ResponseMercadoPagoInstallments";
import { GetInstallmentsMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/GetInstallmentsMercadoPago';
import { ShoppingBagContext } from "../../../../context/ShoppingBagContext";
import { CreatePaymentMercadoPagoUseCase } from '../../../../../Domain/useCases/mercado_pago/CreatePaymentMercadoPago';
import { PaymentParams } from '../../../../../Data/sources/remote/models/PaymentParams';
import { UserContext } from '../../../../context/UserContext';
import { OrderContext } from "../../../../context/OrderContext";
import { ResponseMercadoPagoPayment } from '../../../../../Data/sources/remote/models/ResponseMercadoPagoPayment';

interface DropDownProps {
    label: string,
    value: string
}
const ClientPaymentInstallmentsViewModel = (cardToken: ResponseMercadoPagoCardToken) => {
    const { total, shoppingBag } = useContext(ShoppingBagContext);
    const { user } = useContext(UserContext);
    const { getOrdersByClientAndStatus } = useContext(OrderContext)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<DropDownProps[]>([]);
    const [installments, setInstallments] = useState<PayerCost[]>([]);
    const [installmentData, setInstallmentData] = useState<ResponseMercadoPagoInstallments>()
    const [paymentData, setPaymentData] = useState<ResponseMercadoPagoPayment>()

    useEffect(() => {
        if (installments.length > 0) {
            setDropDownItems();
        }
    }, [installments])

    const getInstallments = async () => {
        const result = await GetInstallmentsMercadoPagoUseCase(cardToken.first_six_digits, total);
        /* console.log(JSON.stringify(result, null, 3)); */
        setInstallments(result.payer_costs);
        setInstallmentData(result);
    }

    const setDropDownItems = () => {
        let itemsDeliveryMen: DropDownProps[] = [];
        installments.forEach(i => {
            itemsDeliveryMen.push({
                label: i.recommended_message,
                value: i.installments.toString()
            })
        });
        setItems(itemsDeliveryMen);
    }

    const createPayment = async () => {
        const data: PaymentParams = {
            installments: value!,
            issuer_id: installmentData?.issuer.id!,
            payment_method_id: installmentData?.payment_method_id!,
            transaction_amount: total,
            token: cardToken.id,
            payer: {
                email: user.correo,
            },
            order: {
                id_client: user.idCliente!,
                products: shoppingBag
            }
        }
        setLoading(true);
        const result = await CreatePaymentMercadoPagoUseCase(data);
        setPaymentData(result.data as ResponseMercadoPagoPayment);
        setLoading(false);
        setResponseMessage(result.message);

    }

    return {
        open,
        value,
        items,
        installments,
        responseMessage,
        loading,
        paymentData,
        setOpen,
        setValue,
        setItems,
        getInstallments,
        createPayment
    }
}

export default ClientPaymentInstallmentsViewModel;