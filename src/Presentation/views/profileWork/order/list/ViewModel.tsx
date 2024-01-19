import React, { useState, useContext, useEffect } from 'react'
import { GetByStatusOrderUseCase } from '../../../../../Domain/useCases/Order/GetByStatusOrder'
import { Order } from '../../../../../Domain/entities/Order'
import { OrderContext } from '../../../../context/OrderContext'
import { UserContext } from '../../../../context/UserContext'
import socket from '../../../../Utils/Socketio'

const EmployeeOrderListViewModel = () => {
    //const [orders, setOrders] = useState<Order[]>([])
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrdersByStatus } = useContext(OrderContext)
    const { user } = useContext(UserContext)

    /* useEffect(() => {
        socket.connect()
        socket.on('connection', () => {
            console.log('----------------------SOCKET IO CONNECCTED--------------------');

        })
    }, []) */

    const getOrders = async (status: string) => {
        const result = await getOrdersByStatus(status)
        /* console.log('Ordenes: ' + JSON.stringify(result, null, 3)) */
        /* socket.emit('consulta', {
            id_order: 5,
            id_client: user.idCliente!
        }) */
    }
    return {
        /* socket, */
        ordersPayed,
        ordersPrepared,
        ordersFine,
        ordersDelivery,
        getOrders
    }
}

export default EmployeeOrderListViewModel