export interface User {
    idUsuario?: string;
    idCliente?: string;
    idTrabajador?: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    num_telefono: string;
    correo: string;
    contrasena: string;
    confirmPassword: string;
    rol?: number;
    session_token?: string;
}