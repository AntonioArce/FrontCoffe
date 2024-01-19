import React from 'react'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'
import { Category } from '../../entities/Category'
const { create } = new CategoryRepositoryImpl() 


export const CreateCategoryUseCase = async (category: Category) => {
  return await create(category)
}
