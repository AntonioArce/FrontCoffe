import React, {useState, useContext} from 'react'
import { AdminEmployeeContext } from '../../../../context/AdminEmployeeContext'

const AdminEmployeeListViewModel = () => {
    const [responseMessage, setResponseMessage] = useState('')
    const { create, employee, getEmployees, remove } = useContext(AdminEmployeeContext)

    const deleteEmployee = async (id: string) => {
        const result = await remove(id)
        setResponseMessage(result.message)
    }

    return {
        employee,
        responseMessage,
        getEmployees,
        deleteEmployee
    }
}

export default AdminEmployeeListViewModel