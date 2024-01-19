import React, { useState, useContext } from 'react';
import { ApiDelivery } from '../../../../Data/sources/remote/api/ApiDelivery';
import { User } from '../../../../Domain/entities/User';
import { UpdateUserUseCase } from '../../../../Domain/useCases/User/UpdateUser';
import { ResponseApiDelivery } from '../../../../Data/sources/remote/models/ResponseApiDelivery';
import { UserContext } from '../../../context/UserContext';


const ProfileUpdateViewModel = (user: User) => {
    const [values, setValues] = useState(user);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { saveUserSession } = useContext( UserContext );

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const onChangeInfoUpdate = (nombre: string, apellido_paterno: string, apellido_materno: string, num_telefono: string) => {
        setValues({ ...values, nombre, apellido_paterno, apellido_materno, num_telefono})
    }

    const update = async () => {
        if (isValidForm()) {
            const response = await UpdateUserUseCase(values);
            console.log('RESULT: ' + JSON.stringify(response));        
            if (response.success) {
                saveUserSession(response.data);
                setSuccessMessage(response.message);
            }
            else {
                setErrorMessage(response.message);
            }
        }
    }

    const isValidForm = (): boolean => {
        if (values.nombre === '') {
            setErrorMessage('Ingresa tu nombre');
            return false;
        }
        if (values.apellido_paterno === '') {
            setErrorMessage('Ingresa tu apellido paterno');
            return false;
        }
        if (values.apellido_materno === '') {
            setErrorMessage('Ingresa tu apellido materno');
            return false;
        }
        if (values.num_telefono === '') {
            setErrorMessage('Ingresa tu telefono');
            return false;
        }
        
        return true;
    }

    return {
        ...values,
        onChange,
        onChangeInfoUpdate,
        update,
        loading,
        errorMessage,
        successMessage,
        user
    }
}



export default ProfileUpdateViewModel