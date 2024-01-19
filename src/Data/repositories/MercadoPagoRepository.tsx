//import { IdentificationType } from '../../Domain/entities/IdentificationType';
import { MercadoPagoRepository } from '../../Domain/repositories/MercadoPagoRepository';
import { ApiMercadoPago } from '../sources/remote/api/ApiMercadoPago';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { CardTokenParams } from '../sources/remote/models/CardTokenParams';
import { PaymentParams } from '../sources/remote/models/PaymentParams';
import { ResponseApiDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { ResponseMercadoPagoCardToken } from '../sources/remote/models/ResponseMercadoPagoCardToken';
/* import { ResponseMercadoPagoInstallments } from '../sources/remote/models/ResponseMercadoPagoIntallments'; */
import { AxiosError } from 'axios';
import { ResponseMercadoPagoInstallments } from '../sources/remote/models/ResponseMercadoPagoInstallments';

export class MercadoPagoRepositoryImpl implements MercadoPagoRepository {

    async getInstallments(bin: string, amount: number): Promise<ResponseMercadoPagoInstallments> {
        const response = await ApiMercadoPago.get<ResponseMercadoPagoInstallments[]>(`/payment_methods/installments?bin=${bin}&amount=${amount}`);
        return response.data[0];
    }

    async createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardToken> {
        const response = await ApiMercadoPago.post<ResponseMercadoPagoCardToken>(`/card_tokens?public_key=TEST-a39bcdae-e992-47bc-8dc9-c92892c3edff`, cardTokenParams);
        return response.data;
    }

    async createPayment(paymentParams: PaymentParams): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/payments/create', paymentParams);
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError)
        }
    }
}