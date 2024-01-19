import { AdminProductRepositoryImpl } from "../../../Data/repositories/AdminProductRepository";
const { getByCategory } = new AdminProductRepositoryImpl()

export const GetByCategoryUseCase = async (id: string) => {
    return await getByCategory(id)
}