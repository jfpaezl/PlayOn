import { useState } from 'react';
import { loginEndpoint, registerEndpoint } from '../../../services/endpoints';
import { useStateStore } from '../../../store/store'

interface ErrorType {
    userEmail?: string;
    userPassword?: string;
    password?: string;
    usuario?: string;
    email?: string;
    exist?: string;
}
export const useLogin = () => {
    const [login, setLogin] = useState(true);
    const [error, setError] = useState<ErrorType>({});
    const [message, setMessage] = useState<string>('');
    const { initState } = useStateStore();

    const handleToggle = () => {
        setLogin(!login);
        setError({});
    }

    // recuperar los datos del action
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        const erros: Record<string, string> = {};
        e.preventDefault();
        setError({});
        const dataObject = Object.fromEntries(new FormData(e.target as HTMLFormElement));
        if (!dataObject?.loginEmail) {
            erros.userEmail = 'El usuario es obligatorio';
        }
        if (!dataObject?.loginPassword) {
            erros.userPassword = 'La contraseña es obligatoria';
        } if (Object.keys(erros).length > 0) {
            setError(erros);
            return;
        }
        const data = {
            email: dataObject?.loginEmail.toString(),
            password: dataObject?.loginPassword.toString()
        }
        loginEndpoint(data).then((response) => {
            initState(response);
            localStorage.setItem('token', response.token);
            window.location.href = '/home';
        })
            .catch(() => {
                erros.userEmail = 'Usuario o contraseña incorrectos';
                setError(erros);
            });
    }

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError({});
        const errors: Record<string, string> = {};
        const dataObject = Object.fromEntries(new FormData(e.target as HTMLFormElement));
        if (dataObject?.password.toString().length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres y no puede estar vacía';
        } if (dataObject?.password !== dataObject?.password2) {
            errors.password = 'Las contraseñas no coinciden';
        } if (!dataObject?.usuario) {
            errors.usuario = 'El usuario es obligatorio';
        } if (!dataObject?.email) {
            errors.email = 'El email es obligatorio';
        }
        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }
        const body = {
            name: dataObject?.usuario.toString(),
            email: dataObject?.email.toString(),
            password: dataObject?.password.toString(),
        }
        registerEndpoint(body)
            .then(() => {
                setMessage('Usuario registrado con éxito verifique su correo para activar su cuenta')
                setLogin(true)
                setError({})
                setTimeout(() => {
                    setMessage('')
                }, 6000);
            })
            .catch(() => {
                errors.exist = 'El usuario con ese email ya existe'
                setError(errors)
            });
    }

    return { login, error, message, handleToggle, handleLogin, handleRegister }
}
