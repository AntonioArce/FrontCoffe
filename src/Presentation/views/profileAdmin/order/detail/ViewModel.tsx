import { useEffect, useState, useContext } from "react";
import { Order } from "../../../../../Domain/entities/Order";
import { UpdateToPrepareOrderUseCase } from "../../../../../Domain/useCases/Order/UpdateToPrepare";
import { OrderContext } from "../../../../context/OrderContext";

const AdminOrderDetailViewModel = (order: Order) => {
    const [total, setTotal] = useState(0.0)
    const [responseMessage, setResponseMessage] = useState('')
    const { updateToPrepare, updateToFine, updateToDelivered } = useContext(OrderContext)

    useEffect(() => {
        if (total === 0)
            getTotal()
    }, [])

    const prepareOrder = async () => {
        const result = await updateToPrepare(order)
        setResponseMessage(result.message)
    }
    const fineOrder = async () => {
        const result = await updateToFine(order)
        setResponseMessage(result.message)
    }
    const deliveredOrder = async () => {
        const result = await updateToDelivered(order)
        setResponseMessage(result.message)
    }


    const getTotal = () => {
        let flag = 0.0
        order.products.map(function (e) {
            //console.log(flag+' '+ e.precio+' '+e.quantity)
            flag = flag + (e.precio * e.quantity!)
            setTotal(total + flag)
            //console.log(flag)
        })
        console.log(total)
    }

    return {
        total,
        responseMessage,
        prepareOrder,
        fineOrder,
        deliveredOrder
    }
}

export default AdminOrderDetailViewModel;