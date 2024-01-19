import { useState, useContext } from 'react';
import { User } from '../../../../../Domain/entities/User';
import { AdminEmployeeContext } from '../../../../context/AdminEmployeeContext';

const AdminEmployeeUpdateViewModel = (user: User) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState(user);
    const { update } = useContext(AdminEmployeeContext)

    const onChange = (property: string, value: any) =>{
        setValues({ ...values, [property]: value});
    }

    const updateEmployee = async () => {
        const response = await update(values)
        if(isValidForm()){
            if(response.success){
                setSuccess('Empleado Actualizado con exito')
                console.log("RESULT: "+ JSON.stringify(response.message))
            }
        }
    }

    const isValidForm = (): boolean => {
        if(values.nombre === ''){
            setErrorMessage('Ingresa el nombre del empleado')
            return false
        }
        if(values.apellido_paterno === ''){
            setErrorMessage('Ingresa el apellido paterno')
            return false
        }
        if(values.apellido_materno === ''){
            setErrorMessage('Ingresa el apellido materno')
            return false
        }
        if(values.num_telefono === ''){
            setErrorMessage('Ingresa el telefono')
            return false
        }
        if(values.correo === ''){
            setErrorMessage('Ingresa el email')
            return false
        }
        if(values.contrasena === ''){
            setErrorMessage('Ingresa la contraseña')
            return false
        }
        if(values.confirmPassword === ''){
            setErrorMessage('Ingresa la contraseña')
            return false
        }
        
        return true;
    }

    return {
        ...values,
        errorMessage,
        success,
        onChange,
        updateEmployee
    }
}

export default AdminEmployeeUpdateViewModel;