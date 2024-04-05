import { useEffect } from "react";
import Layout from "../components/Layout"
import Main from "../components/containes/home/Main";

export default function HomePage() {
    useEffect(() => {
        document.title = 'PlayOn'
    }, [])
    return (
        <Layout>
            <Main />
        </Layout>
    );
}