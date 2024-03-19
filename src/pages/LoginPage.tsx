import { useEffect } from "react";
import Login from "../components/containes/login/Login";

export default function LoginPage() {
    useEffect(() => {
        document.title = 'Iniciar Sesión'
    }, [])
    return (
        <Login />
    )
}