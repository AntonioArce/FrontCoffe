import { AdminProductRepositoryImpl } from '../../../Data/repositories/AdminProductRepository';
const { remove } = new AdminProductRepositoryImpl()

export const DeleteProductUseCase = (id: string) => {
    return remove(id)
}
