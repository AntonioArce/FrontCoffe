import React,{useState, useContext} from 'react'
import { CreateCategoryUseCase } from '../../../../../Domain/useCases/Category/CreateCategoryUseCase';
import { CategoryContext } from '../../../../context/CategoryContext';

const AdminCategoryCreateViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState({
        nombre_tipo: '',
        descripcion: '',
    });

    const { create } = useContext(CategoryContext)

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value});
    }

    const resetForm = async () => {
        setValues({
            nombre_tipo: '',
            descripcion: '',
        })
    }

    const createCategory = async () =>{
        console.log(values.nombre_tipo)
        const response = await create(values)
        if(isValidForm()){
            if(response.success){
                setSuccess('Categoria creada con exito')
                console.log("RESULT: "+ JSON.stringify(response.message))
                resetForm()
            }
        }
    }

    const isValidForm = (): boolean => {
        if(values.nombre_tipo === ''){
            setErrorMessage('Ingresa el nombre de la categoria')
            return false
        }
        if(values.descripcion === ''){
            setErrorMessage('Ingresa la descripcion')
            return false
        }
        return true;
    }
  
  
    return {
        ...values,
        onChange,
        errorMessage,
        createCategory,
        success
    }
}

export default AdminCategoryCreateViewModel