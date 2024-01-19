import React, {useContext, useState} from 'react'
import { RemoveUserLocalUseCase } from '../../../Domain/useCases/userLocal/RemoveUserLocal'
import { UserContext } from '../../context/UserContext'

export const ProfileAdminViewModel = () => {
    const { user, removeUserSession } = useContext(UserContext)

    return {
        removeUserSession,
        user
    }
}

export default ProfileAdminViewModel