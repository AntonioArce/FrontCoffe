import { useState, useContext } from "react";
import * as ImagePicker from 'expo-image-picker'
import { ProductContext } from "../../../../context/ProductContext";
import { CategoryContext } from '../../../../context/CategoryContext';
import { Category } from '../../../../../Domain/entities/Category';


const AdminProductRegisterViewModel = (category: Category) =>{
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        stock: '',
        Tipo_Producto_idTipo_Producto: category.idTipo_Producto,
        imagen: '',
    })

    const { create } = useContext(ProductContext)

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value})
    }

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1
        })
        if(!result.canceled){
            onChange('imagen', result.assets[0].uri)
            setFile(result.assets[0])
        }
    }

    const createProduct = async () =>{
        const response = await create(values, file!)
        console.log("RESULT: "+ JSON.stringify(response))
        setResponseMessage(response.message);
    }

    const isValidForm = (): boolean =>{
        if(values.imagen === ""){
            setErrorMessage('Seleccione una imagem')
            return false
        }
        if(values.nombre === ""){
            setErrorMessage('Ingrese un nombre')
            return false
        }
        if(values.descripcion === ""){
            setErrorMessage('Ingrese una descripcion')
            return false
        }
        if(values.precio === ''){
            setErrorMessage('Ingrese un precio')
            return false
        }
        if(values.stock === ''){
            setErrorMessage('Ingrese un stock')
            return false
        }
        return true
    }

    return {
        ...values,
        onChange,
        pickImage,
        createProduct,
        errorMessage,
        responseMessage
    }
}

export default AdminProductRegisterViewModel