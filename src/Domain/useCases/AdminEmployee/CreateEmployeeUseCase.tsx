import { AdminEmployeeRepositoryImpl } from '../../../Data/repositories/AdminEmployeeRepository'
import { User } from '../../entities/User'
const { create } = new AdminEmployeeRepositoryImpl() 


export const AdminCreateEmployeeUseCase = async (user: User) => {
  return await create(user)
}
