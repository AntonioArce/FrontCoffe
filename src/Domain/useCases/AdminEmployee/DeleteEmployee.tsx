import { AdminEmployeeRepositoryImpl } from "../../../Data/repositories/AdminEmployeeRepository";
const { remove } = new AdminEmployeeRepositoryImpl()

export const DeleteEmployeeUseCase = async (id: string) => {
    return await remove(id)
}