import { AdminEmployeeRepository } from "../../Domain/repositories/AdminEmployeeRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { User } from "../../Domain/entities/User";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";

export class AdminEmployeeRepositoryImpl implements AdminEmployeeRepository{
    async getAll(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/employee/getAll')
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            return Promise.resolve([])
        }
    }
    
    async create(user: User): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/employee/create', user)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }

    async update(user: User): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/employee/update', user)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
    
    async remove(id: string): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.delete<ResponseApiDelivery>(`/employee/delete/${id}`)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
}