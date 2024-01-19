import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryForImage } from "../sources/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ImagePickerAsset } from "expo-image-picker";
import mime from 'mime'
import { AdminProductRepository } from "../../Domain/repositories/AdminProductRepository";
import { Product } from "../../Domain/entities/Product";

export class AdminProductRepositoryImpl implements AdminProductRepository{
    async createWithImage(product: Product, file: ImagePickerAsset): Promise<ResponseApiDelivery> {
        try{
            let data = new FormData()
            data.append('image', {
                uri: file.uri,
                // @ts-ignore
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            })
            data.append('product', JSON.stringify(product))
            const response = await ApiDeliveryForImage.post<ResponseApiDelivery>('/products/createWithImage', data)
            return Promise.resolve(response.data)
        }
        catch(error){
            let e = (error as AxiosError)
            console.log("ERROR: " + JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
    async getByCategory(id: string): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get<Product[]>(`products/findByCategory/${id}`)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            return Promise.resolve([])
        }
    }
    async update(product: Product): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.put<ResponseApiDelivery>('/products/update', product)
            return Promise.resolve(response.data)
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: " + JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }

    async updateWhitImage(product: Product, file: ImagePickerAsset): Promise<ResponseApiDelivery> {
        try{
            let data = new FormData()
            data.append('image', {
                uri: file.uri,
                // @ts-ignore
                name: file.uri.split('/').pop(),
                type: mime.getType(file.uri)!
            })
            data.append('product', JSON.stringify(product))
            const response = await ApiDeliveryForImage.put<ResponseApiDelivery>('/products/updateWithImage', data)
            return Promise.resolve(response.data)
        }
        catch(error){
            let e = (error as AxiosError)
            console.log("ERROR: " + JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }

    async remove(id: string): Promise<ResponseApiDelivery> {
        try {
            const response = await ApiDelivery.delete<ResponseApiDelivery>(`/products/delete/${id}`)
            return Promise.resolve(response.data)
            
        } catch (error) {
            let e = (error as AxiosError)
            console.log("ERROR: "+ JSON.stringify(e.response?.data))
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError)
        }
    }
}