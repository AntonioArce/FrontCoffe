import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository"
import { Order } from "../../entities/Order"
const { updateToPrepare } = new OrderRepositoryImpl()

export const UpdateToPrepareOrderUseCase = async (order: Order) =>{
    return await updateToPrepare(order) 
}