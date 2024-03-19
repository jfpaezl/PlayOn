import { useEffect } from "react";
import Layout from "../components/Layout";
import Profile from "../components/containes/profile/Profile";

export default function ProfilePage() {
    useEffect(() => {
        document.title = 'Perfil'
    }, [])
    return (
        <Layout>
            <Profile />
        </Layout>
    );
}