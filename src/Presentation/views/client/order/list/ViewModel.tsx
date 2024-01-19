import React, { useState, useContext, useEffect } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/Order/GetByStatusOrder'
import { Order } from '../../../../../Domain/entities/Order'
import { OrderContext } from '../../../../context/OrderContext'
import { UserContext } from '../../../../context/UserContext'
import socket from '../../../../Utils/Socketio'

const AdminOrderListViewModel = () => {
    //const [orders, setOrders] = useState<Order[]>([])
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrdersByClientAndStatus } = useContext(OrderContext)
    const { user } = useContext(UserContext);

    const getOrders = async (id_client: string, status: string) => {
        const result = await getOrdersByClientAndStatus(id_client, status)
        /* console.log('Ordenes: ' + JSON.stringify(result, null, 3)) */
    }
    return {
        ordersPayed,
        ordersPrepared,
        ordersFine,
        ordersDelivery,
        user,
        getOrders
    }
}

export default AdminOrderListViewModel