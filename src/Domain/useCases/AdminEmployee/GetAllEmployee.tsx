import { AdminEmployeeRepositoryImpl } from '../../../Data/repositories/AdminEmployeeRepository'
import { User } from '../../entities/User'
const { getAll } = new AdminEmployeeRepositoryImpl() 


export const AdminGetAllEmployeeUseCase = async () => {
  return await getAll()
}
