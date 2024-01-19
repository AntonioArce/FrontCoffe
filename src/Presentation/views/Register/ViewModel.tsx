import { useState } from "react"
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth'

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [modal, setModal] = useState(false)
    const [values, setValues] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        num_telefono: '',
        correo: '',
        contrasena: '',
        confirmPassword: ''
    })

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value })
    }

    const Register = async () => {
        if (isValidForm()) {
            const response = await RegisterAuthUseCase(values)
            setModal(true)
            setSuccessMessage(response.data)

        }
    }

    const isValidForm = (): boolean => {
        if (values.nombre === '') {
            setErrorMessage('Ingresa tu nombre')
            return false
        }
        if (values.apellido_paterno === '') {
            setErrorMessage('Ingresa tus apellidos')
            return false
        }
        if (values.apellido_materno === '') {
            setErrorMessage('Ingresa tu correo electronico')
            return false
        }
        if (values.num_telefono === '') {
            setErrorMessage('Ingresa tu telefono')
            return false
        }
        if (values.contrasena === '' /* !validarContrasena(values.contrasena) */) {
            setErrorMessage('Introdusca la contraseña')
            return false
        }
        if (!validarCorreo(values.correo)) {
            setErrorMessage('El correo no tiene formato valido')
            return false
        }
        if (values.confirmPassword === '') {
            setErrorMessage('Repite tu contraseña')
            return false
        }
        if (values.contrasena != values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden')
            return false
        }
        return true
    }

    const validarCorreo = (correo: string): boolean => {
        // Expresión regular para verificar el formato de correo electrónico
        let patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Verificar si el correo coincide con el patrón
        return patronCorreo.test(correo);
    }

    return {
        ...values,
        errorMessage,
        successMessage,
        onChange,
        Register,
        setErrorMessage,
        modal,
        setModal
    }
}

export default RegisterViewModel