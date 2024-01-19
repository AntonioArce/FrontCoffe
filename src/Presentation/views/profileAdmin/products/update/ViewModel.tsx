import { useState, useContext } from "react";
import * as ImagePicker from 'expo-image-picker'
import { ProductContext } from "../../../../context/ProductContext";
import { CategoryContext } from '../../../../context/CategoryContext';
import { Category } from '../../../../../Domain/entities/Category';
import { Product } from '../../../../../Domain/entities/Product';
import { ResponseApiDelivery } from "../../../../../Data/sources/remote/models/ResponseApiDelivery";


const AdminProductUpdateViewModel = ( product: Product, category: Category) =>{
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
    const [success, setSuccess] = useState('')
    const [values, setValues] = useState(product)

    const { update, updateWithImage } = useContext(ProductContext)

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

    const updateProduct = async () =>{

        let response = {} as ResponseApiDelivery
        console.log('CATEGORIA: '+ product.Tipo_Producto_idTipo_Producto);
        
        if(isValidForm()){
            if(values.imagen.includes('https://')){
                response = await update(values)
                setResponseMessage(response.message)
            }
            else{
                response = await updateWithImage(values, file!)
                setResponseMessage(response.message)
            }
        }
    }

    const isValidForm = (): boolean =>{
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
        updateProduct,
        errorMessage,
        responseMessage
    }
}

export default AdminProductUpdateViewModel