import axios from 'axios';

const ApiMercadoPago = axios.create({
    baseURL: 'https://api.mercadopago.com/v1',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer TEST-1660363096022782-052520-22bed494dcb9369237f7e9997c8e384b-294595697'
    }
})

export { ApiMercadoPago }