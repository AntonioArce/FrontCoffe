import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import { ResponseApiDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';
import { useState } from 'react';
import { createContext } from "react";
import { CreateWithImageUseCase } from '../../Domain/useCases/Product/CreateProductUseCase';
import { GetByCategoryUseCase } from "../../Domain/useCases/Product/GetByCategoryUseCase";
import { UpdateProductUseCase } from "../../Domain/useCases/Product/UpdateProduct";
import { UpdateProductWithImageUseCase } from "../../Domain/useCases/Product/UpdateWithImageProduct";
import { DeleteProductUseCase } from "../../Domain/useCases/Product/DeleteProduct";

export interface ProductContextProps {
    products: Product[],
    getProducts(idCategory: string): Promise<void>,
    create(product: Product, files: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery>
    updateWithImage(product: Product, files: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery>
    update(product: Product): Promise<ResponseApiDelivery>
    remove(product: Product): Promise<ResponseApiDelivery>
}

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState<Product[]>([])
    
    
    const getProducts = async (idCategory: string): Promise<void> => {
        const result = await GetByCategoryUseCase(idCategory);
        setProducts(result);
    }

    const create = async (product: Product, files: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> => {
        const response = await CreateWithImageUseCase(product, files!);
        getProducts(product.Tipo_Producto_idTipo_Producto!);
        return response; 
    }

    const update = async (product: Product): Promise<ResponseApiDelivery> =>{
        const response = await UpdateProductUseCase(product);
        getProducts(product.Tipo_Producto_idTipo_Producto!);
        return response;
    }
    
    const updateWithImage = async (product: Product, files: ImagePicker.ImagePickerAsset): Promise<ResponseApiDelivery> => {
        const response = await UpdateProductWithImageUseCase(product, files);
        getProducts(product.Tipo_Producto_idTipo_Producto!);
        return response;
    }

    const remove = async (product: Product): Promise<ResponseApiDelivery> =>{
        const response = await DeleteProductUseCase(product.idProductos!);
        getProducts(product.Tipo_Producto_idTipo_Producto!);
        return response;
    }
    
    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            create,
            update,
            updateWithImage,
            remove
        }}>
            {children}
        </ProductContext.Provider>
    )
}