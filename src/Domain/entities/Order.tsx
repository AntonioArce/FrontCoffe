import { Product } from "./Product";
import { User } from "./User";

export interface Order {
    id?: string,
    id_client: string,
    estado?: string, 
    timestamp?: number,
    client?: User,
    products: Product[]
}