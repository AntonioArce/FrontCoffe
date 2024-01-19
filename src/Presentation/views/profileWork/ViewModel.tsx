import React, {useContext, useState} from 'react'
import { RemoveUserLocalUseCase } from '../../../Domain/useCases/userLocal/RemoveUserLocal'
import { useUserLocal } from '../../hooks/useUserLocal';
import { UserContext } from '../../context/UserContext';

export const ProfileWorkViewModel = () => {
    const { user, removeUserSession } = useContext(UserContext)

    return {
        removeUserSession,
        user
    }
}

export default ProfileWorkViewModel