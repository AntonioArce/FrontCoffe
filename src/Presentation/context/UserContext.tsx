import { User } from "../../Domain/entities/User";
import { createContext, useState, useEffect } from "react";
import { SaveUserLocalUseCase } from "../../Domain/useCases/userLocal/SaveUserLocal";
import { GetUserLocalUseCase } from "../../Domain/useCases/userLocal/GetUserLocal";
import { RemoveUserLocalUseCase } from "../../Domain/useCases/userLocal/RemoveUserLocal";


export const userInitialState: User = {
    idUsuario: '',
    idCliente: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    num_telefono: '',
    correo: '',
    contrasena: '',
    confirmPassword: '',
    rol: 0,
    session_token: '',
}

export interface UserContextProps {
    user: User;
    getUserSession: () => Promise<void>;
    saveUserSession: (user: User) => Promise<void>;
    removeUserSession: () => Promise<void>;
}

export const UserContext = createContext( {} as UserContextProps);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(userInitialState);

    useEffect(() => {
        getUserSession();
    }, [])

    const saveUserSession = async (user: User) => {
        await SaveUserLocalUseCase(user);
        setUser(user);
    }

    const removeUserSession = async () => {
        await RemoveUserLocalUseCase();
        setUser(userInitialState);
    }

    const getUserSession = async() =>  {
        const user = await GetUserLocalUseCase();
        setUser(user);
    }

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            removeUserSession
        }}>
            { children }
        </UserContext.Provider>
    )

}