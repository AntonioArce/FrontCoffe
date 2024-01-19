import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Order } from "../entities/Order";

export interface OrderRepository {
    create(order: Order): Promise<ResponseApiDelivery>
    getByStatus(status: string): Promise<Order[]>
    updateToPrepare(order: Order): Promise<ResponseApiDelivery>
    updateToFine(order: Order): Promise<ResponseApiDelivery>
    updateToDelivered(order: Order): Promise<ResponseApiDelivery>
    getByClientAndStatus(id_client: string, status: string): Promise<Order[]>
}