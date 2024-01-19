import React, { useState, useContext } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/Order/GetByStatusOrder'
import { Order } from '../../../../../Domain/entities/Order'
import { OrderContext } from '../../../../context/OrderContext'


const AdminOrderListViewModel = () => {
    //const [orders, setOrders] = useState<Order[]>([])
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrdersByStatus } = useContext(OrderContext)

    const getOrders = async (status: string) => {
        const result = await getOrdersByStatus(status)
        /* console.log('Ordenes: '+ JSON.stringify(result, null,3)) */
    }
    return {
        ordersPayed,
        ordersPrepared,
        ordersFine,
        ordersDelivery,
        getOrders
    }
}

export default AdminOrderListViewModel