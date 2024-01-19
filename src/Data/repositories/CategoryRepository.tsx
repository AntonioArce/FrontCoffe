import { AxiosError } from "axios";
import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiDelivery } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";

export class CategoryRepositoryImpl implements CategoryRepository{
    async getAll(): Promise<Category[]> {
        try {
            const response = await ApiDelivery.get<Category[]>('/categories/getAll')
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            return Promise.resolve([])
        }
    }
    async create(category: Category): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.post<ResponseApiDelivery>('/categories/create', category)
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
            const response = await ApiDelivery.delete<ResponseApiDelivery>(`/categories/delete/${id}`)
            return Promise.resolve(response.data)
            
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
    async update(category: Category): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/categories/update', category)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
}