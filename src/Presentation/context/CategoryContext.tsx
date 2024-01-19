import { useEffect } from 'react'
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Category } from "../../Domain/entities/Category";
import { createContext, useState } from "react";
import { GetAllCategoryUseCase } from "../../Domain/useCases/Category/GetAllCategory";
import { CreateCategoryUseCase } from "../../Domain/useCases/Category/CreateCategoryUseCase";
import { UpdateCategoryUseCase } from "../../Domain/useCases/Category/UpdateCategory";
import { DeleteCategoryUseCase } from "../../Domain/useCases/Category/DeleteCategory";

export interface CategoryContextProps {
    categories: Category[],
    getCategories() : Promise<void>;
    create(category: Category): Promise<ResponseApiDelivery>
    update(category: Category): Promise<ResponseApiDelivery>
    remove(id: string): Promise<ResponseApiDelivery>
}

export const CategoryContext = createContext({} as CategoryContextProps)
export const CategoryProvider = ( {children}:any) =>{
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        getCategories()
    }, [])
    
    const getCategories = async(): Promise<void> =>{
        const result = await GetAllCategoryUseCase()
        setCategories(result)
    } 
    const create = async (category: Category) =>{
        console.log(category)
        const response = await CreateCategoryUseCase(category)
        getCategories()
        return response
        
    }
    const update = async (category: Category): Promise<ResponseApiDelivery> =>{
        const response = await UpdateCategoryUseCase(category)
        getCategories()
        return response
    }
    const remove = async (id: string): Promise<ResponseApiDelivery> =>{
        const response = await DeleteCategoryUseCase(id)
        getCategories()
        return response
    }

    return (
        <CategoryContext.Provider value = {{
            categories,
            getCategories,
            create,
            update,
            remove
        }}>
            {children}
        </CategoryContext.Provider>
    )
    
}