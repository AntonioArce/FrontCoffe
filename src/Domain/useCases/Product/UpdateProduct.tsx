import { AdminProductRepositoryImpl } from "../../../Data/repositories/AdminProductRepository";
import { Product } from "../../entities/Product";
const { update } = new AdminProductRepositoryImpl()

export const UpdateProductUseCase = async (product: Product) => {
    return await update(product)
}
