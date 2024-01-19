
import { OrderContext } from '../../../context/OrderContext'
import { useContext } from 'react'

const AdminReportViewModel = () => {
    const { ordersPayed, ordersPrepared, ordersFine, ordersDelivery, getOrdersByStatus } = useContext(OrderContext)
    const getOrders = async (status: string) => {
        const result = await getOrdersByStatus(status)
        /* console.log('Ordenes: '+ JSON.stringify(result, null,3)) */
    }

    return {
        getOrders,
        ordersDelivery
    }
}

export default AdminReportViewModel