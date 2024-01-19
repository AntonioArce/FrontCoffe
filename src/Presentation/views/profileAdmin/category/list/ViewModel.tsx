import React, {useState, useContext} from 'react'
import { Category } from '../../../../../Domain/entities/Category'
import { GetAllCategoryUseCase } from '../../../../../Domain/useCases/Category/GetAllCategory'
import { DeleteCategoryUseCase } from '../../../../../Domain/useCases/Category/DeleteCategory'
import { CategoryContext } from '../../../../context/CategoryContext'

const AdminCategoryListViewModel = () => {
    /* const [categories, setCategories] = useState<Category[]>([])  */
    const [responseMessage, setResponseMessage] = useState('')
    const { categories, getCategories ,remove } = useContext(CategoryContext)
    /* const getCategories = async() =>{
        const result = await GetAllCategoryUseCase()
        console.log(JSON.stringify(result))
        setCategories(result)
    }  */

    const deleteCategory = async (id: string) =>{
        const result =await  remove(id)
        setResponseMessage(result.message)
    }
    return {
        categories,
        responseMessage,
        getCategories,
        deleteCategory
    }
}

export default AdminCategoryListViewModel