import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/containes/login/Login";

export default function LoginPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const statePlayon = localStorage.getItem('state-playon');
        if (statePlayon) {
            navigate('/home');
        }
        document.title = 'Iniciar Sesión'
    }, [])
    return (
        <Login />
    )
}