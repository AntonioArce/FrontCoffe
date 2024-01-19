import {useContext, useState} from 'react';
import { ShoppingBagContext } from '../../../context/ShoppingBagContext';
import { Product } from '../../../../Domain/entities/Product';
import { CreateOrderUseCase } from '../../../../Domain/useCases/Order/CreateOrder';
import { Order } from '../../../../Domain/entities/Order';
import { UserContext } from '../../../context/UserContext';

const ClientShoppingBagViewModel = () => {

    const { shoppingBag, saveItem, deleteItem, total } = useContext(ShoppingBagContext);
    const { user } = useContext(UserContext)
    const [responseMessage, setResponseMessage] = useState('')

    const addItem = async (product: Product) => {
        product.quantity = product.quantity! + 1;
        await saveItem(product);
    }
    
    const subtractItem = async (product: Product) => {
        if (product.quantity! > 1) {
            product.quantity = product.quantity! - 1;
            await saveItem(product);
        }
    }

    const createOrder = async () =>{
        const order: Order = {
            id_client: user.idCliente!,
            products: shoppingBag
        } 
        const result  = await CreateOrderUseCase(order)
        setResponseMessage(result.message)
        //console.log(order)
    }

    return {
        shoppingBag,
        total,
        addItem,
        subtractItem,
        deleteItem,
        responseMessage,
        createOrder
    }
}

export default ClientShoppingBagViewModel;
