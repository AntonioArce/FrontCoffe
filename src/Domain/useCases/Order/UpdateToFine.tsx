import { OrderRepositoryImpl } from "../../../Data/repositories/OrderRepository"
import { Order } from "../../entities/Order"
const { updateToFine } = new OrderRepositoryImpl()

export const UpdateToFineOrderUseCase = async (order: Order) =>{
    return await updateToFine(order) 
}