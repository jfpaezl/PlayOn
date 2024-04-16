import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components'
import { confirmRegisterEndpoint } from '../services/endpoints';

export default function Confirm() {
    const [message, setMessage] = useState<string>('');
    const { token } = useParams<{token: string}>();
    useEffect(() => {
        document.title = 'Confirmar Registro'        
        if (token) {
            confirmRegisterEndpoint(token).then(() => {
                setMessage('Registro confirmado correctamente');
                setTimeout(() => {
                    window.location.href = '/';
                }, 4000);
            })
            .catch(() => {
                setMessage('Error al confirmar el registro')
                setTimeout(() => {
                    window.location.href = '/';
                }, 4000)
            })
        }
    }, [token])
    
    return (
        <ConfirmCss>
            <strong className=''>
                Cuenta confirmada correctamente
            </strong>
        </ConfirmCss>
    )
}

const ConfirmCss = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`