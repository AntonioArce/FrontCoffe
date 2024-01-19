import { AdminEmployeeRepositoryImpl } from '../../../Data/repositories/AdminEmployeeRepository'
import { CategoryRepositoryImpl } from '../../../Data/repositories/CategoryRepository'
import { User } from '../../entities/User'
const { update } = new AdminEmployeeRepositoryImpl()

export const UpdateAdminEmployeeUseCase = async (user: User) => {
    return await update(user)
}
