import React,{useState, useContext} from 'react'
import { AdminEmployeeContext } from '../../../../context/AdminEmployeeContext'

const AdminEmployeeCreateViewModel = () =>{
    const [errorMessage, setErrorMessage] = useState('')
    const [sucess, setSucess] = useState('')
    const [values, setValues] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        num_telefono: '',
        correo: '',
        contrasena: '',
        confirmPassword: ''
    })

    const { create } = useContext(AdminEmployeeContext)

    const onChange = (property: string, value: any) =>{
        setValues({...values, [property]: value})
    }

    const resetForm = async () => {
        setValues({
            nombre: '',
            apellido_paterno: '',
            apellido_materno: '',
            num_telefono: '',
            correo: '',
            contrasena: '',
            confirmPassword: ''
        })
    }

    const createEmployee = async () =>{
        const response = await create(values)
        if(isValidForm()){
            setSucess('Empleado creado con exito')
            console.log("RESULT: "+ JSON.stringify(response.message))
            resetForm()
        }
    }

    const isValidForm = (): boolean => {
        if(values.nombre === ''){
            setErrorMessage('Ingresa el nombre de la categoria')
            return false
        }
        if(values.apellido_paterno === ''){
            setErrorMessage('Ingresa el apellido paterno de la categoria')
            return false
        }
        if(values.apellido_materno === ''){
            setErrorMessage('Ingresa el apellido materno de la categoria')
            return false
        }
        if(values.num_telefono === ''){
            setErrorMessage('Ingresa el numero de telefono de la categoria')
            return false
        }
        if(values.correo === ''){
            setErrorMessage('Ingresa el correo de la categoria')
            return false
        }
        if(values.contrasena === ''){
            setErrorMessage('Ingresa la contraseña de la categoria')
            return false
        }
        if(values.confirmPassword !== values.contrasena){
            setErrorMessage('Las contraseñas no coinciden')
            return false
        }
        
        return true;
    }
    return {
        ...values,
        sucess,
        errorMessage,
        onChange,
        createEmployee
    }
}

export default AdminEmployeeCreateViewModel