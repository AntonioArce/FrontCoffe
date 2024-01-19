import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";

export interface AdminEmployeeRepository{
    getAll(): Promise<User[]>;
    create(user: User): Promise<ResponseApiDelivery>
    update(user: User): Promise<ResponseApiDelivery>
    remove(id: string): Promise<ResponseApiDelivery>
}