import { apiService } from './apiService';

// traer la variable VITE_URL_API de .env
const apiUrl = import.meta.env.VITE_URL_API;

// Construir las interfases para los endpoints que requieren un body
interface LoginBody {
    email: string;
    password: string;
}

interface RegisterBody {
    name: string;
    email: string;
    password: string;
}

/**
 * Endpoint para iniciar sesión
 */
const loginEndpoint = (body: LoginBody) => {
    return apiService(`${apiUrl}auth/login/?email=${body.email}&password=${body.password}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

/**
 * Endpoint para registrar un usuario
 */
const registerEndpoint = (body: RegisterBody) => {
    return apiService(`${apiUrl}auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}

/**
 * Endpoint para confirmar el registro de un usuario
 */

const confirmRegisterEndpoint = (token: string) => {
    return apiService(`${apiUrl}auth/confirm/${token}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

/**
 * Endpoint para resetear el password de un usuario
 */
export {
    loginEndpoint,
    registerEndpoint,
    confirmRegisterEndpoint
}
