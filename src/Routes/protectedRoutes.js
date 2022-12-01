import React from 'react';
import Routering from './routes';
import UserServices from '../Services/userService';

const userService = new UserServices();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children : <Routering/>
}

export default ProtectedRoutes;